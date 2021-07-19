import React from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";

const NotSupportedWarning = ({ show, mpxnType }) => {
  return (
    show && (
      <Alert color="warning">{mpxnType} generation is not supported yet.</Alert>
    )
  );
};

export default NotSupportedWarning;

NotSupportedWarning.propTypes = {
  show: PropTypes.bool.isRequired,
  mpxnType: PropTypes.string.isRequired,
};
