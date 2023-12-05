import React, { useState } from "react";
import { egp } from "./AccountCard";

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
  Card,
  CardBody,
  Button,
} from "reactstrap";
// import { min } from "moment";

function AddNewAccount({ modal, setModal, setAccounts }) {
  // mini modal
  const [miniModal, setMiniModal] = useState(false);
  // alertteq
  const [alert, setAlert] = useState("");

  const [accTypeDisabled, setAccTypeDisabled] = useState(true);

  // states for the form
  const [accountType, setAccountType] = useState("");
  const [otherType, setOtherType] = useState("");
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
          setModal(false);
        }}
        className="modal-lg"
        modalClassName="bd-example-modal-lg"
        style={{ marginTop: 150 }}
      >
        <div className="modal-body" style={{ padding: 15 }}>
          <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
            <b>Add New Account</b>
          </CardTitle>
          <Form
            onSubmit={(e) => {
              {
                onFormSubmit(e);
              }
            }}
          >
            <div className="form-row">
              <FormGroup className="col-md-4">
                <label htmlFor="inputAccType">Account Type</label>
                <Input
                  id="inputAccType"
                  type="select"
                  onChange={(e) => {
                    setAccTypeDisabled(e.target.value !== "Other");
                    setAccountType(e.target.value);
                  }}
                >
                  <option selected="">Choose...</option>
                  <option>Checking Account</option>
                  <option>Savings Account</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
              <FormGroup
                className="col-md-3"
                style={{
                  opacity: accTypeDisabled ? 0 : 1,
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                <label htmlFor="inputAccTypeText">Other</label>
                <Input
                  id="inputAccTypeText"
                  type="text"
                  placeholder="Other Type..."
                  onChange={(e) => {
                    setOtherType(e.target.value);
                  }}
                  disabled={accTypeDisabled}
                ></Input>
              </FormGroup>
            </div>

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
                  I agree to deposit a minimum of EGP 1,000 into this new
                  account within 2 weeks of creation to avoid its deletion.
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
                  <b>Add</b>
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
    console.log(accountType);
    console.log(otherType);
    if (
      accountType === "Choose..." ||
      accountType === "" ||
      (accountType === "Other" && otherType === "")
    ) {
      setAlert("Please choose an account type");
      return;
    }
    // check if he agreed to the terms
    if (!agreed) {
      setAlert("Please agree to the terms");
      return;
    }
    // create the account object
    const account = {
      // random
      id: crypto.randomUUID(),
      // generate a 13 digit number
      accountNumber: Math.floor(1000000000000 + Math.random() * 9000000000000),
      actual: 0,
      type: accTypeDisabled ? accountType : otherType,
      balance: 0,
      transactions: [],
    };
    // add the account to the accounts array
    setAccounts((accounts) => [...accounts, account]);
    // close the modal
    setModal(false);

    resetForm();

    // show a success message
    alertUser("Account created successfully!");
  }

  function resetForm() {
    // reset the form
    setAccountType("");
    setOtherType("");
    setAgreed(false);
  }

  function alertUser(message) {
    setAlert(message);
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
}

export default AddNewAccount;
