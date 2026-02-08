import { test, expect } from "@playwright/test";

test.describe("Contact Form E2E", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("displays contact page correctly", async ({ page }) => {
    // Verify page title and heading
    await expect(page).toHaveTitle(/Dean Morgan/);
    await expect(
      page.getByRole("heading", { name: /Project Inquiries/i }),
    ).toBeVisible();

    // Verify form elements are present
    await expect(page.getByLabel(/Full Name/i)).toBeVisible();
    await expect(page.getByLabel(/Email Address/i)).toBeVisible();
    await expect(page.getByLabel(/Project Details/i)).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Send Inquiry/i }),
    ).toBeVisible();

    // Verify social links
    await expect(
      page.getByRole("link", { name: /LinkedIn/i }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /GitHub/i }).first(),
    ).toBeVisible();
  });

  test("shows validation errors for empty form submission", async ({
    page,
  }) => {
    // Click submit button without filling form
    await page.getByRole("button", { name: /Send Inquiry/i }).click();

    // Wait for and verify validation messages appear
    await expect(
      page.getByText(/Name must be at least 2 characters/i),
    ).toBeVisible();
    await expect(
      page.getByText(/Please enter a valid email address/i),
    ).toBeVisible();
    await expect(
      page.getByText(/Message must be at least 10 characters/i),
    ).toBeVisible();
  });

  test("shows validation error for invalid email", async ({ page }) => {
    // Fill form with invalid email
    await page.getByLabel(/Full Name/i).fill("John Doe");
    await page.getByLabel(/Email Address/i).fill("invalid-email");
    await page
      .getByLabel(/Project Details/i)
      .fill("This is a valid message with enough characters");

    await page.getByRole("button", { name: /Send Inquiry/i }).click();

    // Verify email validation error
    await expect(
      page.getByText(/Please enter a valid email address/i),
    ).toBeVisible();
  });

  test("shows validation error for short name", async ({ page }) => {
    await page.getByLabel(/Full Name/i).fill("J");
    await page.getByRole("button", { name: /Send Inquiry/i }).click();

    await expect(
      page.getByText(/Name must be at least 2 characters/i),
    ).toBeVisible();
  });

  test("shows validation error for short message", async ({ page }) => {
    await page.getByLabel(/Project Details/i).fill("Short");
    await page.getByRole("button", { name: /Send Inquiry/i }).click();

    await expect(
      page.getByText(/Message must be at least 10 characters/i),
    ).toBeVisible();
  });

  test("form has correct placeholder text", async ({ page }) => {
    // Verify placeholders are user-friendly
    await expect(page.getByPlaceholder(/Your full name/i)).toBeVisible();
    await expect(
      page.getByPlaceholder(/your.email@example.com/i),
    ).toBeVisible();
    await expect(
      page.getByPlaceholder(/Tell me about your requirements/i),
    ).toBeVisible();
  });

  test("submits form successfully with valid data", async ({ page }) => {
    // Intercept Web3Forms API call
    await page.route("https://api.web3forms.com/submit", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true }),
      });
    });

    // Fill form with valid data
    await page.getByLabel(/Full Name/i).fill("Jane Smith");
    await page.getByLabel(/Email Address/i).fill("jane@example.com");
    await page
      .getByLabel(/Project Details/i)
      .fill("I need help with my eCommerce platform performance optimization");

    // Submit form
    await page.getByRole("button", { name: /Send Inquiry/i }).click();

    // Verify success message appears
    await expect(page.getByText(/Message sent successfully!/i)).toBeVisible();
    await expect(page.getByText(/Thank you for reaching out/i)).toBeVisible();

    // Verify form was reset
    await expect(page.getByLabel(/Full Name/i)).toHaveValue("");
    await expect(page.getByLabel(/Email Address/i)).toHaveValue("");
    await expect(page.getByLabel(/Project Details/i)).toHaveValue("");
  });

  test("displays error message when API call fails", async ({ page }) => {
    // Intercept Web3Forms API call and return failure
    await page.route("https://api.web3forms.com/submit", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: false }),
      });
    });

    // Fill and submit form
    await page.getByLabel(/Full Name/i).fill("John Doe");
    await page.getByLabel(/Email Address/i).fill("john@example.com");
    await page
      .getByLabel(/Project Details/i)
      .fill("Need help with AI integration");

    await page.getByRole("button", { name: /Send Inquiry/i }).click();

    // Verify error message
    await expect(page.getByText(/Something went wrong/i)).toBeVisible();
    await expect(
      page.getByText(/Please try again or contact me directly/i),
    ).toBeVisible();
  });

  test("displays error message on network failure", async ({ page }) => {
    // Intercept and abort the request to simulate network error
    await page.route("https://api.web3forms.com/submit", async (route) => {
      await route.abort();
    });

    // Fill and submit form
    await page.getByLabel(/Full Name/i).fill("John Doe");
    await page.getByLabel(/Email Address/i).fill("john@example.com");
    await page.getByLabel(/Project Details/i).fill("Looking for consultation");

    await page.getByRole("button", { name: /Send Inquiry/i }).click();

    // Verify error message appears
    await expect(page.getByText(/Something went wrong/i)).toBeVisible();
  });

  test("social links have correct URLs", async ({ page }) => {
    const linkedInLink = page.getByRole("link", { name: /LinkedIn/i }).first();
    const githubLink = page.getByRole("link", { name: /GitHub/i }).first();

    await expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/dean-morgan/",
    );
    await expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/deanjmorgan",
    );
  });

  test("navigation works correctly", async ({ page }) => {
    // Verify header navigation
    await page.getByRole("link", { name: /About/i }).first().click();
    await expect(page).toHaveURL("/about");

    // Navigate back to contact
    await page.goto("/contact");
    await expect(page).toHaveURL("/contact");
  });

  test("supports keyboard navigation", async ({ page }) => {
    // Fill form using keyboard and tab
    await page.getByLabel(/Full Name/i).click();
    await page.keyboard.type("Test User");

    await page.keyboard.press("Tab");
    await page.keyboard.type("test@example.com");

    await page.keyboard.press("Tab");
    await page.keyboard.type("This is a test message for the contact form");

    // Verify values were entered
    await expect(page.getByLabel(/Full Name/i)).toHaveValue("Test User");
    await expect(page.getByLabel(/Email Address/i)).toHaveValue(
      "test@example.com",
    );
    await expect(page.getByLabel(/Project Details/i)).toHaveValue(
      "This is a test message for the contact form",
    );
  });

  test("mobile menu works on small screens", async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });

    // Mobile menu button should be visible
    await expect(
      page.getByRole("button", { name: /Toggle Menu/i }),
    ).toBeVisible();

    // Desktop nav should be hidden
    await expect(page.getByLabel(/Desktop Navigation/i)).toBeHidden();
  });

  test("form is responsive on mobile", async ({ page }) => {
    // Set to mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // All form elements should still be visible and functional
    await expect(page.getByLabel(/Full Name/i)).toBeVisible();
    await expect(page.getByLabel(/Email Address/i)).toBeVisible();
    await expect(page.getByLabel(/Project Details/i)).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Send Inquiry/i }),
    ).toBeVisible();

    // Should be able to fill form on mobile
    await page.getByLabel(/Full Name/i).fill("Mobile User");
    await expect(page.getByLabel(/Full Name/i)).toHaveValue("Mobile User");
  });
});

test.describe("Contact Form Accessibility", () => {
  test("has proper ARIA labels and semantic HTML", async ({ page }) => {
    await page.goto("/contact");

    // Check for proper labels
    await expect(page.getByLabel(/Full Name/i)).toBeVisible();
    await expect(page.getByLabel(/Email Address/i)).toBeVisible();
    await expect(page.getByLabel(/Project Details/i)).toBeVisible();

    // Check for semantic HTML structure
    const main = page.locator("main");
    await expect(main).toBeVisible();

    const header = page.locator("header");
    await expect(header).toBeVisible();

    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("displays validation errors in accessible way", async ({ page }) => {
    await page.goto("/contact");

    // Submit empty form
    await page.getByRole("button", { name: /Send Inquiry/i }).click();

    // Error messages should be associated with fields
    const nameInput = page.getByLabel(/Full Name/i);
    const errorMessage = page.getByText(/Name must be at least 2 characters/i);

    await expect(nameInput).toBeVisible();
    await expect(errorMessage).toBeVisible();
  });
});
