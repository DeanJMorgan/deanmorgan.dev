import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "../components/sections/hero";

/* eslint-disable @typescript-eslint/no-explicit-any */
// Mocking framer-motion to avoid issues in test environment
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

describe("Hero Component", () => {
  it("renders the high-impact headline and primary CTAs", () => {
    render(<Hero />);
    expect(screen.getByText(/Engineering High-Performance/i)).toBeDefined();
    expect(screen.getByText(/eCommerce/i)).toBeDefined();
    expect(screen.getByRole("link", { name: /Get in touch/i })).toBeDefined();
    expect(screen.getByRole("link", { name: /About my approach/i })).toBeDefined();
  });
});
