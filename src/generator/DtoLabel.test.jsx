import { render, screen } from "@testing-library/react";
import DtoLabel from "./DtoLabel";
import { MPXN_TYPES } from "./mpxnTypes";

describe("tests for the DTO label", () => {
  it("should show a DTO if the MPXN type is electricity", () => {
    render(<DtoLabel mpxnType={MPXN_TYPES.MPAN} mpxnValue="1612345678901" />);
    const el = screen.getByText(/DNO: North Western England/gi);

    expect(el).toBeVisible();
  });

  it("should not show a DTO if the MPXN type is gas", () => {
    render(<DtoLabel mpxnType={MPXN_TYPES.MPRN} mpxnValue="1012345678" />);
    const el = screen.queryByText(/DNO:/gi);

    expect(el).not.toBeInTheDocument();
  });
});
