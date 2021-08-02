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
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import RowSpacer from "./RowSpacer";
import MpanGenerator from "./lib/mpanGenerator";
import MprnGenerator from "./lib/mprnGenerator";
import NotSupportedWarning from "./NotSupportedWarning";
import { MPXN_TYPES } from "./mpxnTypes";
import GenerateMpxnButton from "./GenerateMpxnButton";
import WidgetHeader from "./WidgetHeader";

const Generator = () => {
  const [mpxnType, setMpxnType] = useState(MPXN_TYPES.MPAN);
  const [mpxnVal, setMpxnVal] = useState("");
  const [elemsAreDisabled] = useState(false);

  const getMpxnText = () =>
    mpxnType === MPXN_TYPES.MPAN ? "MPAN (Electricity)" : "MPRN (Gas)";

  const generateMpxn = () => {
    const mpxnGenerator =
      mpxnType === MPXN_TYPES.MPRN ? new MprnGenerator() : new MpanGenerator();

    const mpxnNumber = mpxnGenerator.generate();
    setMpxnVal(mpxnNumber);
  };

  useEffect(() => {
    setMpxnVal("");
  }, [mpxnType]);

  return (
    <div>
      <Container>
        <Row>
          <WidgetHeader mpxnType={mpxnType} />
        </Row>
        <Row>
          <ButtonGroup>
            <GenerateMpxnButton
              mpxnType={MPXN_TYPES.MPAN}
              active={mpxnType === MPXN_TYPES.MPAN}
              onClickFn={() => setMpxnType(MPXN_TYPES.MPAN)}
            />

            <GenerateMpxnButton
              mpxnType={MPXN_TYPES.MPRN}
              active={mpxnType === MPXN_TYPES.MPRN}
              onClickFn={() => setMpxnType(MPXN_TYPES.MPRN)}
            />
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
