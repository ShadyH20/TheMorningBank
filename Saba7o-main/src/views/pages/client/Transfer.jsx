import { useState } from "react";

import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  Nav,
  NavItem,
  NavLink,
  Label,
  Button,
  UncontrolledCollapse,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Modal,
  ModalBody,
} from "reactstrap";

import { egp } from "./accounts and cards/AccountCard";

function ClientTransfer({ accounts, setAccounts }) {
  const [alert, setAlert] = useState("");
  const [miniModal, setMiniModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [international, setInternational] = useState(false);

  const [accountChosen, setAccountChosen] = useState(null);
  const [ownAccountTab, setOwnAccountTab] = useState(true);

  // 8 states for the 8 fields
  // fields: otherAccountNumber, transferPurpose, benefName, benefEmail, payerRef, information
  //  ownAccountTo

  const [ownAccountTo, setOwnAccountTo] = useState(null);

  const [otherAccountNumber, setOtherAccountNumber] = useState("");
  const [transferPurpose, setTransferPurpose] = useState("");
  const [benefName, setBenefName] = useState("");
  const [benefEmail, setBenefEmail] = useState("");
  const [payerRef, setPayerRef] = useState("");
  const [information, setInformation] = useState("");
  const [amount, setAmount] = useState(0);
  // currency
  const [currency, setCurrency] = useState("");

  return (
    <>
      {alertModal()}
      {successModal()}
      <Row
        style={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          flexDirection: "row",
          margin: 0,
          height: "100%",
        }}
      >
        <Col
          style={{
            flexGrow: 2,
            // backgroundColor: "lightgrey",
            borderRight: "3px solid #e8e8e8",
            margin: 0,
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
          }}
          className="select-payer"
        >
          <Row style={{ width: "100%" }}>
            <CardTitle
              tag="h4"
              className="text-left"
              style={{
                margin: 5,
                height: 100,
                display: "flex",
                alignItems: "center",
              }}
            >
              <b>Transfers</b>
            </CardTitle>
          </Row>
          <Row style={{ width: "100%" }}>
            {/* select payer column
            contains dropdown to choose account, card to display account info, and saved benificiaries card*/}
            <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
              <b>Select Payer</b>
            </CardTitle>
          </Row>

          {/* 30 height */}
          <div style={{ height: 30 }}></div>

          {/* select account dropdown */}
          <Form style={{ width: "100%" }}>
            <FormGroup>
              <Input
                id="exampleFormControlSelect1"
                type="select"
                value={accountChosen == null ? "" : accountChosen.id}
                // defaultValue={accountChosen == null ? "Choose Account" : accountChosen.id}
                onChange={(e) => {
                  setAccountChosen(
                    accounts.find((acc) => acc.id == e.target.value)
                  );
                }}
              >
                <option>Choose Account</option>
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
          </Form>

          {/* 30 height */}
          <div style={{ height: 30 }}></div>

          {currentAccountCard()}
        </Col>

        {transferToColumn()}
      </Row>
    </>
  );

  function currentAccountCard() {
    return accountChosen == null ? null : (
      <Card
        style={{
          borderRadius: 10,
          marginBottom: 10,
          paddingTop: 15,
          paddingBottom: 15,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          background: "#1e1f26",
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
          <h5 style={{ color: "#ffffff" }}>{accountChosen.type}</h5>

          {/* 30 px */}
          <div style={{ height: 30 }}></div>

          {/* balance */}
          <div>
            <h7 style={{ color: "#ffffff", marginBottom: 8 }}>Balance</h7>
            <h2
              style={{
                color: "#b5f2e5",
                margin: 0,
                fontWeight: 500,
                fontWeight: "bold",
              }}
            >
              {egp.format(accountChosen.balance)}
            </h2>
          </div>

          {/* horizontal divider */}
          <hr
            style={{
              backgroundColor: "lightGrey",
              marginTop: 30,
              marginBottom: 30,
            }}
          />

          {/* account number */}
          <div>
            <h7 style={{ color: "#ffffff", marginBottom: 8 }}>
              Account Number
            </h7>
            <h4 style={{ color: "#b5f2e5", margin: 0, fontWeight: 500 }}>
              {/* account number seperated by spaces every 3 digits and 4 digits at the end*/}
              {accountChosen.accountNumber == null
                ? null
                : accountChosen.accountNumber
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}
              {/* {accountChosen.accountNumber} */}
            </h4>
          </div>

          <div style={{ height: 5 }}></div>
        </CardBody>
      </Card>
    );
  }

  function transferToColumn() {
    return (
      <>
        {/* TRANSFER TO COLUMN */}
        <Col style={{ flexGrow: 3, margin: 0, marginLeft: 15, height: "auto" }}>
          <Row
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
            }}
          >
            {/* open triangle facing down */}
            <i
              className="now-ui-icons arrows-1_minimal-down"
              style={{ paddingLeft: 20, paddingRight: 20, fontWeight: 700 }}
            />
            <CardTitle
              tag="h4"
              className="text-right"
              style={{
                margin: 5,
                height: 100,
                display: "flex",
                alignItems: "center",
              }}
            >
              Shady Hani
            </CardTitle>
          </Row>
          <Row style={{}}>
            {/* select payer column
            contains dropdown to choose account, card to display account info, and saved benificiaries card*/}
            <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
              <b>Transfer To</b>
            </CardTitle>
          </Row>

          <div style={{ height: 10 }}></div>

          {/* two tabs: Own Account, Other Account */}
          <Row style={{}}>
            <Nav style={{ width: "60%", transition: "all 0.5s ease-in-out" }}>
              <NavItem style={{ width: "50%" }}>
                <NavLink
                  style={{
                    fontWeight: ownAccountTab ? 700 : 400,
                    fontSize: 17,
                  }}
                  onClick={() => {
                    setOwnAccountTab(true);
                  }}
                >
                  Own Account
                </NavLink>
              </NavItem>
              <NavItem style={{ width: "50%" }}>
                <NavLink
                  style={{
                    fontWeight: !ownAccountTab ? 700 : 400,
                    fontSize: 17,
                  }}
                  onClick={() => {
                    setOwnAccountTab(false);
                  }}
                >
                  Other Account
                </NavLink>
              </NavItem>
            </Nav>
          </Row>

          <hr style={{ backgroundColor: "lightGrey", marginTop: 0 }} />

          {ownAccountTab ? <div style={{ height: 30 }}></div> : null}

          {/* DOmestic "switch" International */}
          {ownAccountTab ? null : (
            <Row style={{ height: 30, marginLeft: "25%", fontWeight: "bold" }}>
              <div>Domestic</div>
              <div style={{ width: 20 }}></div>
              <Switch
                offColor=""
                offText=""
                onColor=""
                onText=""
                defaultValue={international}
                onChange={() => {
                  setInternational(!international);
                }}
                checked={international}
              />
              <div>International</div>
            </Row>
          )}

          {ownAccountTab ? (
            <>
              <Form style={{ width: "100%" }}>
                <FormGroup>
                  <label htmlFor="inputAddress">Account *</label>

                  <Input
                    id="exampleFormControlSelect1"
                    type="select"
                    onChange={(e) => {
                      setOwnAccountTo(
                        accounts.find((acc) => acc.id == e.target.value)
                      );
                    }}
                  >
                    <option>Choose Account</option>
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
              </Form>
            </>
          ) : (
            <>
              <FormGroup>
                <label htmlFor="inputAddress">Account Number *</label>
                <Input
                  id="inputAddress"
                  placeholder="Number"
                  type="text"
                  onChange={(e) => {
                    setOtherAccountNumber(e.target.value);
                  }}
                ></Input>
              </FormGroup>
            </>
          )}

          <div className="form-row">
            {/* CURRENCY FIELD */}
            {!ownAccountTab && international ? (
              <FormGroup className="col-md-4">
                <label htmlFor="inputAddress">Currency *</label>
                <InputGroup>
                  <Input
                    placeholder="EGP"
                    type="text"
                    onChange={(e) => {
                      setCurrency(e.target.value);
                    }}
                  ></Input>
                </InputGroup>
              </FormGroup>
            ) : null}
            <FormGroup
              className={
                !ownAccountTab && international ? "col-md-8" : "col-md-12"
              }
            >
              <label htmlFor="inputAddress">Amount *</label>
              <InputGroup>
                {!ownAccountTab && international ? null : (
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText style={{ fontSize: 12 }}>
                      EGP
                    </InputGroupText>
                  </InputGroupAddon>
                )}
                <Input
                  placeholder="000.00"
                  type="number"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                ></Input>
              </InputGroup>
            </FormGroup>
          </div>

          {/* 30 height */}
          <div style={{ height: 40 }}></div>

          <Form
            onSubmit={(e) => {
              submitTransfer(e);
            }}
          >
            {/* COLLAPSABLE */}
            <div className="item">
              <a
                id="exampleAccordion1"
                onClick={(e) => e.preventDefault()}
                style={{ color: "#1e1f26", fontWeight: 500 }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontWeight: 700,
                  }}
                >
                  <div>Other (Optional)</div>
                  <i
                    className="now-ui-icons arrows-1_minimal-down"
                    style={{
                      paddingLeft: 20,
                      paddingRight: 20,
                      fontWeight: 900,
                    }}
                  />
                </div>

                <hr
                  style={{
                    backgroundColor: "#f1f1f1",
                    marginTop: 5,
                    marginBottom: 20,
                  }}
                />
              </a>
              <UncontrolledCollapse
                role="tabpanel"
                toggler="#exampleAccordion1"
                defaultOpen
              >
                <div>
                  <div className="form-row">
                    <FormGroup className="col-md-6">
                      <label>Transfer Purpose</label>
                      <Input
                        placeholder="Purpose..."
                        type="text"
                        onChange={(e) => {
                          setTransferPurpose(e.target.value);
                        }}
                      ></Input>
                    </FormGroup>
                    <FormGroup className="col-md-6">
                      <label htmlFor="inputPassword4">Beneficiary's name</label>
                      <Input
                        id="inputPassword4"
                        placeholder="Name..."
                        type="text"
                        onChange={(e) => {
                          setBenefName(e.target.value);
                        }}
                      ></Input>
                    </FormGroup>
                  </div>
                  <div className="form-row">
                    <FormGroup className="col-md-6">
                      <label>Beneficiary's email</label>
                      <Input
                        placeholder="example@domain.com"
                        type="email"
                        onChange={(e) => {
                          setBenefEmail(e.target.value);
                        }}
                      ></Input>
                    </FormGroup>
                    <FormGroup className="col-md-6">
                      <label htmlFor="inputPassword4">Payer's Reference</label>
                      <Input
                        id="inputPassword4"
                        placeholder="Reference..."
                        type="text"
                        onChange={(e) => {
                          setPayerRef(e.target.value);
                        }}
                      ></Input>
                    </FormGroup>
                  </div>
                  <FormGroup>
                    <label htmlFor="inputAddress">
                      Information for Beneficiary
                    </label>
                    <Input
                      id="inputAddress"
                      placeholder="Information..."
                      type="text"
                      onChange={(e) => {
                        setInformation(e.target.value);
                      }}
                    ></Input>
                  </FormGroup>
                </div>
              </UncontrolledCollapse>
            </div>

            <Button
              type="submit"
              style={{
                position: "absolute",
                bottom: 0,
                width: "-webkit-fill-available",
                marginRight: 15,
                marginBottom: 25,
                // bg color like the account balance card
                backgroundColor: "#1e1f26",
                fontSize: 17,
                // backgroundColor: "#b5f2e5",
              }}
            >
              Complete Transfer
            </Button>
          </Form>
        </Col>
      </>
    );
  }

  function submitTransfer(e) {
    console.log(e);
    e.preventDefault();
    console.log("Currency: " + currency);

    var isInternational = international && !ownAccountTab && currency != "EGP";
    var isDomestic = !international && !ownAccountTab;

    // check the required fields: account, amount
    if (accountChosen == null) {
      alertUser("Please choose an account to transfer from!");
      return;
    }

    // INTERNAL TRANSFER
    if (ownAccountTab) {
      if (ownAccountTo == null) {
        alertUser("Please choose an account to transfer to!");
        return;
      }
      if (ownAccountTo.id == accountChosen.id) {
        alertUser("Please choose a different account to transfer to!");
        return;
      }
    } else {
      // EXTERNAL TRANSFER
      if (otherAccountNumber == null || otherAccountNumber == "") {
        alertUser("Please enter the account number to transfer to!");
        return;
      }
    }

    var amountFinal = isInternational ? amount * 30 : amount;

    if (amount == null || amount == "") {
      alertUser("Please enter the amount to transfer!");
      return;
    }

    // check if the amount is valid
    if (amountFinal > accountChosen.balance) {
      alertUser("Insufficient balance!");
      return;
    }

    // check if the amount is valid
    if (amount <= 0) {
      alertUser("Please enter a valid amount!");
      return;
    }

    if (isInternational) {
      // check if currency is chosen
      if (currency == "") {
        alertUser("Please choose a currency!");
        return;
      }
    }

    // DO THE TRANSFER
    // deeduct from the payer account
    // add to the payee account if it is internal
    // add account transaction to the payer account
    // add account transaction to the payee account if it is internal

    setAccounts(
      accounts.map((account) => {
        if (account.id == accountChosen.id) {
          account.balance = account.balance - amountFinal;
          account.transactions = [
            {
              id: crypto.randomUUID(),
              date: new Date().toISOString().slice(0, 10),
              amount: -amountFinal,
              description:
                "Transfer" +
                (isInternational ? " of " + currency + " " + amount : "") +
                " to " +
                ownAccountTab
                  ? ownAccountTo.accountNumber + " " + ownAccountTo.type
                  : otherAccountNumber,
            },
            ...account.transactions,
          ];
        }
        if (ownAccountTab) {
          if (account.id == ownAccountTo.id) {
            account.balance =
              parseFloat(account.balance) + parseFloat(amountFinal);
            account.transactions = [
              {
                id: crypto.randomUUID(),
                date: new Date().toISOString().slice(0, 10),
                amount: amountFinal,
                description:
                  "Transfer" +
                  (isInternational ? " of " + currency + " " + amount : "") +
                  " from " +
                  accountChosen.accountNumber +
                  " " +
                  accountChosen.type,
              },
              ...account.transactions,
            ];
          }
        }
        return account;
      })
    );

    alertUserSuccess(
      "Transfer of EGP " +
        amountFinal +
        " to " +
        accountChosen.accountNumber +
        " " +
        accountChosen.type +
        " was completed successfully!"
    );
  }

  function alertUser(message) {
    setAlert(message);
    console.log(alert);
    setMiniModal(true);
  }

  function alertUserSuccess(message) {
    setAlert(message);
    console.log(alert);
    setShowSuccessModal(true);
  }

  function alertModal() {
    return (
      <Modal
        modalClassName={"modal-mini modal-warning"}
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
              // bell icon
              className="now-ui-icons ui-1_bell-53"
              style={{ color: "#ffb236" }}
            ></i>
          </div>
        </div>
        <ModalBody>
          <p>{alert}</p>
        </ModalBody>
      </Modal>
    );
  }

  function successModal() {
    return (
      <Modal
        modalClassName={"modal-mini modal-success"}
        toggle={() => setShowSuccessModal(false)}
        onClosed={() => setAlert("")}
        isOpen={showSuccessModal}
      >
        <div>
          <Button
            className="btn-neutral"
            color="link"
            type="button"
            onClick={() => setShowSuccessModal(false)}
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
              // bell icon
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

export default ClientTransfer;
