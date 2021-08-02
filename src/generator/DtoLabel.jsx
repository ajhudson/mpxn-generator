import React from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";
import { MPXN_TYPES } from "./mpxnTypes";
import MpanGenerator from "./lib/mpanGenerator";

const DtoLabel = ({ mpxnType, mpxnValue }) => {
  const isElec = mpxnType === MPXN_TYPES.MPAN;
  const firstTwoDigits = Number.parseInt(mpxnValue.substr(0, 2));

  const getDno = (prefix) => {
    if (!isElec) {
      return null;
    }

    const gen = new MpanGenerator();
    const dno = gen.getDnoById(prefix);

    return dno;
  };

  const dnoTxt = getDno(firstTwoDigits);

  return isElec && dnoTxt ? (
    <Alert
      color="warning"
      style={{ width: "95%", marginLeft: 10, marginRight: 10 }}
    >
      DNO: {dnoTxt}
    </Alert>
  ) : null;
};

export default DtoLabel;

DtoLabel.propTypes = {
  mpxnType: PropTypes.number.isRequired,
  mpxnValue: PropTypes.string,
};

DtoLabel.defaultProps = {
  mpxnValue: "",
};
