import { render, screen } from "@testing-library/react";
import { MPXN_TYPES } from "./mpxnTypes";
import WidgetHeader from "./WidgetHeader";

describe("tests for the widget header", () => {
  it("should render for electricity", () => {
    render(<WidgetHeader mpxnType={MPXN_TYPES.MPAN} />);
    screen.getByText("Generate MPAN (Electricity)");
  });

  it("should render for gas", () => {
    render(<WidgetHeader mpxnType={MPXN_TYPES.MPRN} />);
    screen.getByText("Generate MPRN (Gas)");
  });
});
