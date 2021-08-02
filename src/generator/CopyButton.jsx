import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const CopyButton = ({ mpxnValue }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const mpxnNotEmpty = mpxnValue && mpxnValue?.length > 0;
    setIsEnabled(mpxnNotEmpty);
  }, [mpxnValue]);

  return (
    <CopyToClipboard text={mpxnValue}>
      <Button color="secondary" disabled={!isEnabled} block>
        Copy <FontAwesomeIcon icon={faCopy} />
      </Button>
    </CopyToClipboard>
  );
};

export default CopyButton;

CopyButton.propTypes = {
  mpxnValue: PropTypes.string,
  isEnabled: PropTypes.bool,
};

CopyButton.defaultProps = {
  mpxnValue: "",
  isEnabled: false,
};
