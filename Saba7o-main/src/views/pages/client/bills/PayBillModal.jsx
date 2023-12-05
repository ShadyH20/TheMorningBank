import React, { useState } from "react";
// import { egp } from "./AccountCard";

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
import CardField from "../accounts and cards/CardField";
import { egp } from "../accounts and cards/AccountCard";
// import { min } from "moment";

function PayBillModal({ modal, setModal, accounts, bill, payBill }) {
  // mini modal
  const [miniModal, setMiniModal] = useState(false);
  // alert
  const [alert, setAlert] = useState("");

  // states for the form
  //   const [pointsInput, setPointsInput] = useState(points);
  const [accountChosen, setAccountChosen] = useState("");
  const [agreed, setAgreed] = useState(false);

  console.log("bill", bill);
  // console.log("bill amount", bill.amount);

  return (
    <>
    {alertModal()}
      <Modal
        isOpen={modal}
        toggle={() => setModal(!modal)}
        size="lg"
        style={{ marginTop: 140 }}
      >
        <Row className="modal-header">
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
            <b>Pay Bill</b>
          </CardTitle>
          {billInfo()}
        </Row>
        <ModalBody
          style={{
            paddingTop: 0,
          }}
        >
          <Form
            onSubmit={(e) => {
              {
                onFormSubmit(e);
              }
            }}
          >
            <div className="form-row">
              <FormGroup className="col-md-6">
                <label htmlFor="inputAccType">Account to Pay with</label>
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
                  I confirm the payment of this bill.
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
                  <b>Pay Bill</b>
                </Button>
              </div>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );

  function onFormSubmit(e) {
    e.preventDefault();
    // get the form data
    // check that the user chose an account type
    console.log(accountChosen);
    if (accountChosen === "" || accountChosen === "Choose...") {
      setAlert("Please choose an account to the bill with.");
      return;
    }

    // check if he agreed to the terms
    if (!agreed) {
      setAlert("Please agree to the terms");
      return;
    }

    // check if the user has enough balance
    if (bill.amount > accounts.find((acc) => acc.id === accountChosen).balance) {
      setAlert("You don't have enough balance");
      return;
    }

    // pay the bill
    payBill(accountChosen, bill);

    // // check if the user has enough points
    // if (pointsInput > points) {
    //   setAlert("You don't have enough points");
    //   return;
    // }
    // deduct the points from the user's card, and add the cashback to the account, and make a transaction for the cashback in the account
    // deduct the points from the user's card
    // setCards(
    //   cards.map((card) => {
    //     if (card.id === selectedCard.id) {
    //       card.points -= pointsInput;
    //     }
    //     return card;
    //   })
    // );

    // add the cashback to the account
    // setAccounts(
    //   accounts.map((acc) => {
    //     if (acc.id === accountChosen) {
    //       acc.balance += parseFloat((pointsInput * 0.05).toFixed(2));
    //       acc.transactions.push({
    //         id: crypto.randomUUID(),
    //         // todays date in yyyy-mm-dd format
    //         // for example: 2021-05-31
    //         date: new Date().toISOString().slice(0, 10),
    //         amount: parseFloat((pointsInput * 0.05).toFixed(2)),
    //         description: "Redeemed " + pointsInput + " Credit Card Points",
    //       });
    //     }
    //     return acc;
    //   })
    // );

    // make a transaction for the cashback in the account

    // close the modal
    setModal(false);

    resetForm();

    // show a success message
    alertUser("Payed the bill successfully!");
  }

  function resetForm() {
    // reset the form
    // setPointsInput(points);
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


  function billInfo() {
    return (
      <Card
        style={{
          fontSize: 13,
          borderRadius: 10,
          paddingLeft: 10,
          paddingRight: 10,
          marginBottom: 0,
          width: "auto",
          background: "#1e1f26",
          color: "white",
        }}
      >
        <CardBody>
          <Row
            style={{
              justifyContent: "space-between",
            }}
          >
            <div>
              <CardField
                title={"Bill Number"}
                value={bill.billNumber}
                alignLeft
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                titleColor="white"
              />
            </div>

            <div style={{ width: 20 }}></div>

            <div>
              <CardField
                title={"Type"}
                value={bill.type}
                alignLeft
                style={{ display: "flex", flexDirection: "column" }}
              />
            </div>

            <div style={{ width: 20 }}></div>

            <div>
              <CardField
                title={"Amount"}
                value={egp.format(bill.amount)}
                alignLeft
                style={{ display: "flex", flexDirection: "column",
                color: "#b5f2e5",
              }}
              titleColor={"white"}
              />
            </div>

            <div style={{ width: 20 }}></div>

            <CardField
              title={"Due Date"}
              value={bill.dueDate}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default PayBillModal;
