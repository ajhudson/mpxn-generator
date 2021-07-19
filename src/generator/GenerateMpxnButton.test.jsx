import { render, screen } from "@testing-library/react";
import GenerateMpxnButton from "./GenerateMpxnButton";
import { MPXN_TYPES } from "./mpxnTypes";

describe("tests for generate button", () => {
  it("should render an MPRN generation button", () => {
    render(<GenerateMpxnButton active={true} mpxnType={MPXN_TYPES.MPRN} />);
    screen.getByRole("button", { value: /^Generate MPRN/gi });
    screen.getByTitle("Gas Flame");
  });

  it("should render an MPAN generation button", () => {
    render(<GenerateMpxnButton active={true} mpxnType={MPXN_TYPES.MPAN} />);
    screen.getByRole("button", { value: /^Generate MPAN/gi });
    screen.getByTitle("Electricity Bolt");
  });
});
