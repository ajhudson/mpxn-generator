import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  ButtonGroup,
  Row,
  Form,
  FormGroup,
  Input,
  Col,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurn, faBolt, faCopy } from "@fortawesome/free-solid-svg-icons";
import RowSpacer from "./RowSpacer";
import MpanGenerator from "./lib/mpanGenerator";
import NotSupportedWarning from "./NotSupportedWarning";

const MPXN_TYPES = { MPAN: 1, MPRN: 2 };

const Generator = () => {
  const [mpxnType, setMpxnType] = useState(MPXN_TYPES.MPAN);
  const [mpxnVal, setMpxnVal] = useState("");
  const [elemsAreDisabled, setElemsAreDisabled] = useState(false);

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

  useEffect(() => {
    setElemsAreDisabled(mpxnType === MPXN_TYPES.MPRN);
  }, [mpxnType]);

  return (
    <div>
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
              <Row>
                <Col>
                  <InputGroup>
                    <Input
                      type="text"
                      name="generatedMpxn"
                      id="generatedMpxn"
                      readOnly
                      value={mpxnVal}
                      disabled={elemsAreDisabled}
                    />
                    <InputGroupAddon addonType="append">
                      <CopyToClipboard text={mpxnVal}>
                        <Button
                          color="secondary"
                          block
                          disabled={elemsAreDisabled}
                        >
                          Copy <FontAwesomeIcon icon={faCopy} />
                        </Button>
                      </CopyToClipboard>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </Row>
        <RowSpacer />
        <Row>
          <NotSupportedWarning
            show={elemsAreDisabled}
            mpxnType={getMpxnText()}
          />

          <ButtonGroup>
            <Button
              color="primary"
              onClick={generateMpxn}
              disabled={elemsAreDisabled}
            >
              Generate
            </Button>
          </ButtonGroup>
        </Row>
      </Container>
    </div>
  );
};

export default Generator;
