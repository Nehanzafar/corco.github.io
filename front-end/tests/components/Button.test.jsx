import React from 'react'
import { render, screen } from "@testing-library/react";
import Button from "../../src/components/Button.jsx";

describe("Button", () => {
  it("Should render a button that performs an action when provided with the onClick property", () => {
    render(<Button onClick={() => {}}>Click me</Button>);

    const button = screen.getByRole("button", {name: /click/i});
    
    expect(button).toHaveTextContent(/click/i);
  });

});
