import React from "react";
import { fireEvent, queryAllByRole, render, screen } from "@testing-library/react";
import Button from "../../src/components/Button.jsx";
import { expect, vi } from "vitest";

describe("Button", () => {
  // beforeEach(() => {
  //   vi.clear();
  // });
  const mockFuntion = vi.fn().mockImplementation(() => {alert("Hello")});
  it("Should render a button that performs an action when provided with the onClick property", async () => {
    render(<Button onClick={mockFuntion}>Click me</Button>);

    const button = screen.getByRole("button", { name: /click/i });
    const alert = screen.queryByRole("alert")
    expect(button).toHaveTextContent(/click/i);
    fireEvent.click(button)
    expect(alert).toHaveTextContent(/Hello/i)

  });
});
