import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactPage from "../app/contact/page";

// Mock framer-motion to avoid issues in test environment
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Contact Form", () => {
  beforeEach(() => {
    // Reset fetch mock before each test
    global.fetch = vi.fn();
  });

  it("renders the contact form with all fields", () => {
    render(<ContactPage />);

    expect(screen.getByLabelText(/Full Name/i)).toBeDefined();
    expect(screen.getByLabelText(/Email Address/i)).toBeDefined();
    expect(screen.getByLabelText(/Project Details/i)).toBeDefined();
    expect(screen.getByRole("button", { name: /Send Inquiry/i })).toBeDefined();
  });

  it("displays validation errors for empty fields", async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    const submitButton = screen.getByRole("button", { name: /Send Inquiry/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/Name must be at least 2 characters/i),
      ).toBeDefined();
      expect(
        screen.getByText(/Please enter a valid email address/i),
      ).toBeDefined();
      expect(
        screen.getByText(/Message must be at least 10 characters/i),
      ).toBeDefined();
    });
  });

  it("displays validation error for invalid email", async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    const emailInput = screen.getByLabelText(/Email Address/i);
    await user.type(emailInput, "invalid-email");

    const submitButton = screen.getByRole("button", { name: /Send Inquiry/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/Please enter a valid email address/i),
      ).toBeDefined();
    });
  });

  it("displays validation error for short name", async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    const nameInput = screen.getByLabelText(/Full Name/i);
    await user.type(nameInput, "A");

    const submitButton = screen.getByRole("button", { name: /Send Inquiry/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/Name must be at least 2 characters/i),
      ).toBeDefined();
    });
  });

  it("displays validation error for short message", async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    const messageInput = screen.getByLabelText(/Project Details/i);
    await user.type(messageInput, "Short");

    const submitButton = screen.getByRole("button", { name: /Send Inquiry/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/Message must be at least 10 characters/i),
      ).toBeDefined();
    });
  });

  it("submits form successfully with valid data", async () => {
    const user = userEvent.setup();

    // Mock successful API response
    (global.fetch as any).mockResolvedValueOnce({
      json: async () => ({ success: true }),
    });

    render(<ContactPage />);

    // Fill in the form
    const nameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const messageInput = screen.getByLabelText(/Project Details/i);

    await user.type(nameInput, "John Doe");
    await user.type(emailInput, "john@example.com");
    await user.type(messageInput, "I need help with my eCommerce project");

    const submitButton = screen.getByRole("button", { name: /Send Inquiry/i });
    await user.click(submitButton);

    // Check success message
    await waitFor(() => {
      expect(screen.getByText(/Message sent successfully!/i)).toBeDefined();
      expect(screen.getByText(/Thank you for reaching out/i)).toBeDefined();
    });

    // Verify form was reset
    expect((nameInput as HTMLInputElement).value).toBe("");
    expect((emailInput as HTMLInputElement).value).toBe("");
    expect((messageInput as HTMLTextAreaElement).value).toBe("");
  });

  it("displays error message when API call fails", async () => {
    const user = userEvent.setup();

    // Mock failed API response
    (global.fetch as any).mockResolvedValueOnce({
      json: async () => ({ success: false }),
    });

    render(<ContactPage />);

    // Fill in the form
    await user.type(screen.getByLabelText(/Full Name/i), "John Doe");
    await user.type(
      screen.getByLabelText(/Email Address/i),
      "john@example.com",
    );
    await user.type(
      screen.getByLabelText(/Project Details/i),
      "I need help with my project",
    );

    const submitButton = screen.getByRole("button", { name: /Send Inquiry/i });
    await user.click(submitButton);

    // Check error message
    await waitFor(() => {
      expect(screen.getByText(/Something went wrong/i)).toBeDefined();
      expect(
        screen.getByText(/Please try again or contact me directly/i),
      ).toBeDefined();
    });
  });

  it("displays error message when network request fails", async () => {
    const user = userEvent.setup();

    // Mock network error
    (global.fetch as any).mockRejectedValueOnce(new Error("Network error"));

    render(<ContactPage />);

    // Fill in the form
    await user.type(screen.getByLabelText(/Full Name/i), "John Doe");
    await user.type(
      screen.getByLabelText(/Email Address/i),
      "john@example.com",
    );
    await user.type(
      screen.getByLabelText(/Project Details/i),
      "I need help with my project",
    );

    const submitButton = screen.getByRole("button", { name: /Send Inquiry/i });
    await user.click(submitButton);

    // Check error message
    await waitFor(() => {
      expect(screen.getByText(/Something went wrong/i)).toBeDefined();
    });
  });

  it("calls Web3Forms API with correct data", async () => {
    const user = userEvent.setup();

    // Mock successful API response
    (global.fetch as any).mockResolvedValueOnce({
      json: async () => ({ success: true }),
    });

    render(<ContactPage />);

    // Fill in the form
    await user.type(screen.getByLabelText(/Full Name/i), "Jane Smith");
    await user.type(
      screen.getByLabelText(/Email Address/i),
      "jane@example.com",
    );
    await user.type(
      screen.getByLabelText(/Project Details/i),
      "Looking for performance optimization",
    );

    const submitButton = screen.getByRole("button", { name: /Send Inquiry/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "https://api.web3forms.com/submit",
        expect.objectContaining({
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: expect.stringContaining("Jane Smith"),
        }),
      );
    });
  });

  it("has correct placeholder text", () => {
    render(<ContactPage />);

    const nameInput = screen.getByPlaceholderText(/Your full name/i);
    const emailInput = screen.getByPlaceholderText(/your.email@example.com/i);
    const messageInput = screen.getByPlaceholderText(
      /Tell me about your requirements/i,
    );

    expect(nameInput).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(messageInput).toBeDefined();
  });

  it("renders social links", () => {
    render(<ContactPage />);

    // Use getAllByRole since there are multiple instances (header + footer)
    const linkedInLinks = screen.getAllByRole("link", { name: /LinkedIn/i });
    const githubLinks = screen.getAllByRole("link", { name: /GitHub/i });

    expect(linkedInLinks.length).toBeGreaterThan(0);
    expect(linkedInLinks[0].getAttribute("href")).toBe(
      "https://www.linkedin.com/in/dean-morgan/",
    );
    expect(githubLinks.length).toBeGreaterThan(0);
    expect(githubLinks[0].getAttribute("href")).toBe(
      "https://github.com/deanjmorgan",
    );
  });
});
