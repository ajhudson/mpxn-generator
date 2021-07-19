import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurn, faBolt } from "@fortawesome/free-solid-svg-icons";
import { MPXN_TYPES } from "./mpxnTypes";

const GenerateMpxnButton = ({ active, mpxnType, onClickFn }) => {
  const isGas = mpxnType === MPXN_TYPES.MPRN;
  const icon = isGas ? (
    <FontAwesomeIcon icon={faBurn} title="Gas Flame" />
  ) : (
    <FontAwesomeIcon icon={faBolt} title="Electricity Bolt" />
  );

  return (
    <Button color="primary" onClick={onClickFn} active={active}>
      Generate {mpxnType} {icon}
    </Button>
  );
};

GenerateMpxnButton.propTypes = {
  active: PropTypes.bool.isRequired,
  mpxnType: PropTypes.string.isRequired,
  onClickFn: PropTypes.func.isRequired,
};

export default GenerateMpxnButton;
