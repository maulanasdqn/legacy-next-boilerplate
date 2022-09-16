import { render, screen } from "@testing-library/react";
import Home from "pages";

describe("Test UnoCSS", () => {
  test("Test apakah unocss ter render", () => {
    render(<Home />);
    const testClass = screen.getByTestId("unocss-test");
    expect(testClass).toHaveClass("text-red-700");
  });

  test("Test apakah ada tulisan 'Test UnoCSS'", () => {
    render(<Home />);
    const text = screen.getByText("Test UnoCSS");
    expect(text).toBeInTheDocument;
  });
});
