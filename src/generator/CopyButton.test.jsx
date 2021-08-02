import { render, screen } from "@testing-library/react";
import CopyButton from "./CopyButton";

describe("tests for the copy button", () => {
  const getBtn = () => screen.getByText(/^Copy/gi);

  it("should render the copy button and be enabled", () => {
    render(<CopyButton mpxnValue="1234567890" />);
    expect(getBtn()).toBeEnabled();
  });

  it.each`
    mpxnValue
    ${""}
    ${null}
    ${undefined}
  `("should be rendered and disabled as the mpxn is empty", ({ mpxnValue }) => {
    render(<CopyButton mpxnValue={mpxnValue} />);
    expect(getBtn()).toBeDisabled();
  });
});
