import { render, screen } from "@testing-library/react";
import NotSupportedWarning from "./NotSupportedWarning";

describe("tests for the NotSupportedWarning component", () => {
  const msg = "MPAN (Electricity) generation is not supported yet.";

  it("should show a warning", () => {
    render(<NotSupportedWarning show={true} mpxnType="MPAN (Electricity)" />);
    screen.getByText(msg);
  });

  it("should not show a warning", () => {
    render(<NotSupportedWarning show={false} mpxnType="MPRN (Electricity)" />);
    expect(screen.queryByText(msg)).toBeNull();
  });
});
