import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import GenerateMpxnButton from "./GenerateMpxnButton";
import { MPXN_TYPES } from "./mpxnTypes";

describe("tests for generate button", () => {
  let clickFn;

  beforeEach(() => {
    clickFn = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render an MPRN generation button", () => {
    render(
      <GenerateMpxnButton
        active={true}
        mpxnType={MPXN_TYPES.MPRN}
        onClickFn={clickFn}
      />
    );
    screen.getByRole("button", { value: /^Generate MPRN/gi });
    screen.getByTitle("Gas Flame");
    expect(clickFn).not.toHaveBeenCalled();
  });

  it("should render an MPAN generation button", () => {
    render(
      <GenerateMpxnButton
        active={true}
        mpxnType={MPXN_TYPES.MPAN}
        onClickFn={clickFn}
      />
    );
    screen.getByRole("button", { value: /^Generate MPAN/gi });
    screen.getByTitle("Electricity Bolt");
    expect(clickFn).not.toHaveBeenCalled();
  });

  it("should invoke the click function when the button is clicked", () => {
    render(
      <GenerateMpxnButton
        active={true}
        mpxnType={MPXN_TYPES.MPAN}
        onClickFn={clickFn}
      />
    );
    user.click(screen.getByRole("button", { value: /^Generate MPAN/gi }));
    expect(clickFn).toHaveBeenCalled();
  });
});
