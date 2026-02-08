import { test, expect } from "@playwright/test";

test("has title and navigation works", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Dean Morgan/);

  // Click the about link.
  await page.click("text=About");

  // Expects page to have a heading with the name of the page.
  await expect(page.locator("h1")).toContainText(/engineering excellence/i);
});
