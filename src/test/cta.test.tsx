import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CallToAction } from "../components/sections/cta";

/* eslint-disable @typescript-eslint/no-explicit-any */
// Mocking framer-motion to avoid issues in test environment
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

describe("CallToAction Component", () => {
  it("renders with default props", () => {
    render(<CallToAction />);
    expect(screen.getByText(/Have a project in mind\?/i)).toBeDefined();
    expect(screen.getByText(/I'm always open to discussing new ideas/i)).toBeDefined();
    const link = screen.getByRole("link", { name: /Get in touch/i });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("/contact");
  });

  it("renders with custom props", () => {
    render(
      <CallToAction
        heading="Custom Heading"
        subheading="Custom Subheading"
        ctaText="Custom Button"
        ctaHref="/custom-path"
      />
    );
    expect(screen.getByText("Custom Heading")).toBeDefined();
    expect(screen.getByText("Custom Subheading")).toBeDefined();
    const link = screen.getByRole("link", { name: "Custom Button" });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("/custom-path");
  });
});
