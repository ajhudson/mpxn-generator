import React from "react";
import PropTypes from "prop-types";
import { MPXN_TYPES } from "./mpxnTypes";

const WidgetHeader = ({ mpxnType }) => {
  const titleText =
    mpxnType === MPXN_TYPES.MPAN ? "MPAN (Electricity)" : "MPRN (Gas)";

  return <h3>Generate {titleText}</h3>;
};

export default WidgetHeader;

WidgetHeader.propTypes = {
  mpxnType: PropTypes.number.isRequired,
};
