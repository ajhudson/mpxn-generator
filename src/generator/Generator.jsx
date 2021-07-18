import React, { useState } from "react";
import {
  Container,
  Button,
  ButtonGroup,
  Row,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurn, faBolt } from "@fortawesome/free-solid-svg-icons";
import RowSpacer from "./RowSpacer";
import MpanGenerator from "./lib/mpanGenerator";

const MPXN_TYPES = { MPAN: 1, MPRN: 2 };

const Generator = () => {
  const [mpxnType, setMpxnType] = useState(MPXN_TYPES.MPAN);
  const [mpxnVal, setMpxnVal] = useState("");

  const getMpxnText = () =>
    mpxnType === MPXN_TYPES.MPAN ? "MPAN (Electricity)" : "MPRN (Gas)";

  const generateMpxn = () => {
    if (mpxnType === MPXN_TYPES.MPRN) {
      return;
    }

    const mpanGenerator = new MpanGenerator();
    const mpanCore = mpanGenerator.generate();

    setMpxnVal(mpanCore);
  };

  return (
    <div style={{ width: "33%" }}>
      <Container>
        <Row>
          <h3>Generate {getMpxnText()}</h3>
        </Row>
        <Row>
          <ButtonGroup>
            <Button
              color="primary"
              onClick={() => setMpxnType(MPXN_TYPES.MPAN)}
              active={mpxnType === MPXN_TYPES.MPAN}
            >
              Generate MPAN <FontAwesomeIcon icon={faBolt} />
            </Button>

            <Button
              color="primary"
              onClick={() => setMpxnType(MPXN_TYPES.MPRN)}
              active={mpxnType === MPXN_TYPES.MPRN}
            >
              Generate MPRN <FontAwesomeIcon icon={faBurn} />
            </Button>
          </ButtonGroup>
        </Row>
        <RowSpacer />
        <Row>
          <Form>
            <FormGroup>
              <Input
                type="text"
                name="generatedMpxn"
                id="generatedMpxn"
                readOnly
                value={mpxnVal}
              />
            </FormGroup>
          </Form>
        </Row>
        <RowSpacer />
        <Row>
          <ButtonGroup>
            <Button color="primary" onClick={generateMpxn}>
              Generate
            </Button>
          </ButtonGroup>
        </Row>
      </Container>
    </div>
  );
};

export default Generator;
