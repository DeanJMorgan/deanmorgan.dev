import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HowIHelp } from "../components/sections/how-i-help";

/* eslint-disable @typescript-eslint/no-explicit-any */
// Mocking framer-motion to avoid issues in test environment
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

describe("HowIHelp Component", () => {
  it("renders the section heading", () => {
    render(<HowIHelp />);
    expect(screen.getByText(/How I can help your business\./i)).toBeDefined();
  });

  it("renders the core services with British English spelling", () => {
    render(<HowIHelp />);
    expect(screen.getByText(/optimise site speed/i)).toBeDefined();
    expect(screen.getByText(/Specialising in Adobe Commerce/i)).toBeDefined();
    expect(screen.getByText(/Performance Consulting/i)).toBeDefined();
  });

  it("mentions the additional experience areas", () => {
    render(<HowIHelp />);
    expect(screen.getByText(/marketing strategy/i)).toBeDefined();
    expect(screen.getAllByText(/SEO/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/paid advertising/i)).toBeDefined();
    expect(screen.getByText(/social media/i)).toBeDefined();
    expect(screen.getByText(/graphic design/i)).toBeDefined();
  });
});
