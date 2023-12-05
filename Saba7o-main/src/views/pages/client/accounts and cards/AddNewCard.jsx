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

function AddNewCard({ modal, setModal, setCards }) {
  // mini modal
  const [miniModal, setMiniModal] = useState(false);
  // alert
  const [alert, setAlert] = useState("");

  const [accTypeDisabled, setAccTypeDisabled] = useState(true);

  // states for the form
  const [cardType, setCardType] = useState("");
  const [name, setName] = useState("");
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
          <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
            <b>Add New Credit Card</b>
          </CardTitle>
          <Form
            onSubmit={(e) => {
              {
                onFormSubmit(e);
              }
            }}
          >
            <div className="form-row">
              <FormGroup className="col-md-6">
                <label htmlFor="inputEmail4">Card Holder Name</label>
                <Input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="inputEmail4"
                  placeholder="Name"
                  type="text"
                ></Input>
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-4">
                <label htmlFor="inputAccType">Card Type</label>
                <Input
                  id="inputAccType"
                  type="select"
                  onChange={(e) => {
                    setAccTypeDisabled(e.target.value !== "Other");
                    setCardType(e.target.value);
                  }}
                >
                  <option selected="">Choose...</option>
                  <option>Silver</option>
                  <option>Gold</option>
                  <option>Platinum</option>
                </Input>
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
                  I confirm the creation of a new Credit Card.
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
    console.log(cardType);
    console.log(name);
    if (name === "") {
      setAlert("Please enter a card holder name");
      return;
    }
    if (cardType === "" || cardType === "Choose...") {
      setAlert("Please choose a card type");
      return;
    }

    // check if he agreed to the terms
    if (!agreed) {
      setAlert("Please agree to the terms");
      return;
    }
    // create the account object
    const card = {
      // random
      id: crypto.randomUUID(),
      //   cardNumber: "4141123456789123",
      name: name,
      type: "Visa Credit " + cardType,
      balance: 0,
      bill: 0,
      // date should be the 25 of this month if it is still before the 25th of the month and the 25 of next month if it is after the 25th of the month
      dueDate: stringDate(
        new Date().getDate() < 25
          ? new Date(new Date().getFullYear(), new Date().getMonth(), 25)
          : new Date(new Date().getFullYear(), new Date().getMonth() + 1, 25)
      ),
      points: 0,
      // generate a 16 digit number starting with 4
      cardNumber: "4" + Math.floor(Math.random() * 1000000000000000),
      transactions: [],
    };
    // add the card to the cards array
    setCards((cards) => [...cards, card]);
    // close the modal
    setModal(false);

    resetForm();

    // show a success message
    alertUser("Credit card created successfully!");
  }

  function resetForm() {
    // reset the form
    setCardType("");
    setName("");
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
}

export default AddNewCard;
