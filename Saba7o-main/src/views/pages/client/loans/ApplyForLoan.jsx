import React, { useState } from "react";
import { egp } from "../accounts and cards/AccountCard";

// reactstrap components
import {
  CardTitle,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
// import { min } from "moment";

function ApplyForLoan({ modal, setModal, loans, setLoans }) {
  // mini modal
  const [miniModal, setMiniModal] = useState(false);
  // alert
  const [alert, setAlert] = useState("");

  // states for the form
  const [amountInput, setAmountInput] = useState(null);
  const [durationInput, setDurationInput] = useState(null);
  const [type, setType] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      {alertModal()}
      <Modal
        isOpen={modal}
        toggle={() => {
          resetForm();
          if (!modal) setAlert("");
          setModal(!modal);
        }}
        onClosed={() => {
          resetForm();
          //   setAlert("");
          setModal(false);
        }}
        className="modal-lg"
        modalClassName="bd-example-modal-lg"
        style={{ marginTop: 140 }}
      >
        <div className="modal-body" style={{ padding: 15 }}>
          <CardTitle
            tag="h4"
            className="text-left"
            style={{
              margin: 5,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <b>Apply for Loan</b>
          </CardTitle>
          <Form
            onSubmit={(e) => {
              {
                onFormSubmit(e);
              }
            }}
          >
            <div
              className="form-row"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FormGroup className={"col-md-6 no-margin"}>
                <label htmlFor="inputAddress">Loan Amount</label>
                <InputGroup>
                  (
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText
                      style={{ fontSize: 12, paddingTop: 5, paddingBottom: 5 }}
                    >
                      EGP
                    </InputGroupText>
                  </InputGroupAddon>
                  )
                  <Input
                    placeholder="000.00"
                    type="number"
                    onChange={(e) => {
                      setAmountInput(e.target.value);
                    }}
                  ></Input>
                </InputGroup>
              </FormGroup>

              <FormGroup className="col-md-6">
                <label>Loan duration (in months)</label>
                <Input
                  className="form-control-plaintext"
                  placeholder="XX months"
                  type="number"
                  value={durationInput}
                  onChange={(e) => {
                    setDurationInput(e.target.value);
                  }}
                ></Input>
              </FormGroup>
            </div>

            <div
              className="form-row"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Col>
                <label className="no-margin no-padding">
                  Loan Type
                  <br />
                </label>
                <Row style={{ marginLeft: 0 }}>
                  <FormGroup check className="form-check-radio">
                    <Label check>
                      <Input
                        defaultValue="Personal"
                        id="inlineRadio1"
                        name="inlineRadioOptions"
                        type="radio"
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                      ></Input>
                      Personal <span className="form-check-sign"></span>
                    </Label>
                  </FormGroup>
                  <div style={{ width: 20 }}></div>
                  <FormGroup check className="form-check-radio">
                    <Label check>
                      <Input
                        defaultValue="Car"
                        id="inlineRadio2"
                        name="inlineRadioOptions"
                        type="radio"
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                      ></Input>
                      Car <span className="form-check-sign"></span>
                    </Label>
                  </FormGroup>
                </Row>
              </Col>
            </div>

            <div style={{ height: 20 }}></div>

            <FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    value={agreed}
                    onChange={(e) => {
                      setAgreed(e.target.checked);
                    }}
                    valid={agreed ? "true" : "false"}
                  ></Input>
                  I confirm the application of this loan.
                  <span className="form-check-sign">
                    <span className="check"></span>
                  </span>
                </Label>
              </FormGroup>
            </FormGroup>

            {/* error text to the left */}
            <Row
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                paddingLeft: 15,
                paddingRight: 15,
                paddingBottom: 0,
                marginBottom: 0,
              }}
            >
              <div className="text-left text-danger">
                {alert === "" ? null : (
                  <i className="now-ui-icons ui-1_bell-53"></i>
                )}
                {"     " + alert}
              </div>
              {/* add and cancel buttons on the right */}
              <div className="text-right">
                <Button
                  color="secondary"
                  onClick={() => {
                    setModal(!modal);
                  }}
                >
                  <b>Cancel</b>
                </Button>
                <Button color="info" type="submit">
                  <b>Apply</b>
                </Button>
              </div>
            </Row>
          </Form>
        </div>
      </Modal>
    </>
  );

  function onFormSubmit(e) {
    e.preventDefault();
    // get the form data
    // check that the user chose an account type
    console.log(amountInput);
    console.log(type);

    // check if the user entered a valid amount

    if (amountInput == null || amountInput <= 0) {
      setAlert("Please enter a valid amount");
      return;
    }

    // check if the user entered a valid duration
    if (durationInput == null || durationInput <= 0) {
      setAlert("Please enter a valid duration.");
      return;
    }

    // check if the user chose a loan type
    if (type === "") {
      setAlert("Please choose a loan type.");
      return;
    }

    // check if he agreed to the terms
    if (!agreed) {
      setAlert("Please agree to the terms.");
      return;
    }

    setLoans([
      ...loans,
      {
        id: crypto.randomUUID(),
        // random 8 digit number
        loanNumber: Math.floor(10000000 + Math.random() * 90000000),
        amount: amountInput,
        duration: durationInput,
        type: type,
        status: "Pending",
        dueDate: "",
      },
    ]);

    // make a transaction for the cashback in the account

    // close the modal
    setModal(false);

    resetForm();

    // show a success message
    alertUser("Your loan application was issued successfully! Please wait for approval.");
  }

  function resetForm() {
    // reset the form
    setAmountInput(null);
    setAgreed(false);
  }

  function alertUser(message) {
    setAlert(message);
    console.log(alert);
    setMiniModal(true);
  }

  function alertModal() {
    return (
      <Modal
        modalClassName="modal-mini modal-success"
        toggle={() => setMiniModal(false)}
        onClosed={() => setAlert("")}
        isOpen={miniModal}
      >
        <div>
          <Button
            className="btn-neutral"
            color="link"
            type="button"
            onClick={() => setMiniModal(false)}
            style={{
              paddingTop: 0,
              paddingBottom: 0,
              float: "right",
              fontSize: 17,
            }}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </Button>
        </div>
        <div className="modal-header justify-content-center">
          <div className="modal-profile">
            <i
              className="now-ui-icons ui-1_check"
              style={{ color: "green" }}
            ></i>
          </div>
        </div>
        <ModalBody>
          <p>{alert}</p>
        </ModalBody>
      </Modal>
    );
  }

  function stringDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    return year + "-" + month + "-" + day;
  }

  // function to show only the first 4 and last 3 digits of the card number
  function formatPts(num) {
    //   format the number to have commas
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

export default ApplyForLoan;
