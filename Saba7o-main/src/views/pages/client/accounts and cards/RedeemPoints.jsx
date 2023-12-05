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

function RedeemPoints({
  modal,
  setModal,
  points,
  setCards,
  setAccounts,
  accounts,
  cards,
  selectedCard,
}) {
  // mini modal
  const [miniModal, setMiniModal] = useState(false);
  // alert
  const [alert, setAlert] = useState("");

  // states for the form
  const [pointsInput, setPointsInput] = useState(points);
  const [accountChosen, setAccountChosen] = useState("");
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
            <b>Redeem Points</b>

            {/* Points balance card */}
            <Card
              style={{
                borderRadius: 10,
                marginBottom: 0,
                width: "fit-content",
                background: "#1e1f26",
                marginLeft: "auto",
              }}
              className="text-left"
            >
              <CardBody
                style={{
                  paddingTop: 5,
                  paddingBottom: 0,
                  // round edges
                }}
              >
                {/* row spacing should be space between */}
                <Row
                  style={{
                    padding: 5,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: 13,
                        lineHeight: 1.2,
                      }}
                    >
                      Points Balance:
                    </span>
                    <span
                      style={{
                        color: "#b5f2e5",
                        margin: 0,
                        fontWeight: 500,
                        fontSize: 20,
                      }}
                    >
                      {formatPts(points)}
                      <span style={{ color: "#ffffff", fontSize: 11 }}>
                        {"  Points"}
                      </span>
                    </span>
                  </div>
                </Row>
              </CardBody>
            </Card>
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
              <FormGroup className="col-md-5">
                <label>Points to Redeem</label>
                <Input
                  defaultValue={points}
                  value={pointsInput}
                  onChange={(e) => {
                    console.log(e.target.value);
                    if (parseInt(e.target.value) > points) {
                      setPointsInput(points);
                      return;
                    }
                    setPointsInput(e.target.value);
                  }}
                  placeholder="Name"
                  type="number"
                ></Input>
              </FormGroup>
              {/* an arrow icon then an uneditable field to show to value of the points in */}
              <i
                className="now-ui-icons arrows-1_minimal-right"
                style={{ paddingLeft: 20, paddingRight: 20, fontWeight: 700 }}
              ></i>
              <FormGroup className="col-md-5">
                <label>Cashback in EGP</label>
                <Input
                  className="form-control-plaintext"
                  placeholder="Name"
                  type="number"
                  value={parseFloat((pointsInput * 0.05).toFixed(2))}
                  readOnly=""
                  //   disabled
                ></Input>
              </FormGroup>
            </div>
            {/* text that says that 100 points convert to 5 egp */}
            <div className="text-left">
              <p style={{ fontSize: 12, fontWeight: 600 }}>
                <b>* 100 points = 5 EGP</b>
              </p>
            </div>

            <div className="form-row">
              <FormGroup className="col-md-7">
                <label htmlFor="inputAccType">Account for Cashback</label>
                <Input
                  id="inputAccType"
                  type="select"
                  onChange={(e) => {
                    setAccountChosen(e.target.value);
                  }}
                >
                  <option selected="">Choose...</option>
                  {accounts.map((acc) => {
                    return (
                      <option value={acc.id}>{
                        // account number, type, balance
                        `${acc.accountNumber} - ${acc.type} - EGP ${acc.balance}`
                      }</option>
                    );
                  })}
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
                  I confirm the redemption of my points.
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
                  <b>Redeem</b>
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
    console.log(pointsInput);
    console.log(accountChosen);
    if (accountChosen === "" || accountChosen === "Choose...") {
      setAlert("Please choose an account to redeem the cashback to");
      return;
    }

    // check if he agreed to the terms
    if (!agreed) {
      setAlert("Please agree to the terms");
      return;
    }

    // check if the user has enough points
    if (pointsInput > points) {
      setAlert("You don't have enough points");
      return;
    }
    // deduct the points from the user's card, and add the cashback to the account, and make a transaction for the cashback in the account
    // deduct the points from the user's card
    setCards(
      cards.map((card) => {
        if (card.id === selectedCard.id) {
          card.points -= pointsInput;
        }
        return card;
      })
    );

    // add the cashback to the account
    setAccounts(
      accounts.map((acc) => {
        if (acc.id === accountChosen) {
          acc.balance += parseFloat((pointsInput * 0.05).toFixed(2));
          acc.transactions.push({
            id: crypto.randomUUID(),
            // todays date in yyyy-mm-dd format
            // for example: 2021-05-31
            date: new Date().toISOString().slice(0, 10),
            amount: parseFloat((pointsInput * 0.05).toFixed(2)),
            description: "Redeemed "+ pointsInput +" Credit Card Points",
          });
        }
        return acc;
      })
    );

    // make a transaction for the cashback in the account

    // close the modal
    setModal(false);

    resetForm();

    // show a success message
    alertUser("Redeemed Credit Card Points Successfully!");
  }

  function resetForm() {
    // reset the form
    setPointsInput(points);
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

export default RedeemPoints;
