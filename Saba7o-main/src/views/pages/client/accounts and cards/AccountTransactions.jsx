import { useState } from "react";
import { egp } from "./AccountCard";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
} from "reactstrap";
import AccountCard from "./AccountCard";
import CardCard from "./CardCard";
import CardField from "./CardField";
import Transcation from "./Transaction";

function AccountTransactions({ account, back , deleteAccount}) {
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <>
    {theDeleteModal()}
      <CardBody className="text-dark">
        {/* back button */}

        <Row>
          <Col>
            <Button
              outline
              color="default"
              onClick={back}
              style={{
                // color the button text
                // color: "black",
                // outline color
                borderColor: "white",
                float: "left",
                margin: 5,
                padding: 10,
                paddingTop: 7,
                paddingBottom: 7,
                borderRadius: 10,
              }}
            >
              <i className="fa fa-arrow-left" />
              {"      Back"}
            </Button>
            <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
              <b>Account Transactions</b>
            </CardTitle>
          </Col>
        </Row>
        {/* account card */}
        <AccountCard account={account} noBtn />

        {/* 30 px space */}
        <div style={{ height: 30 }}></div>

        {/* transactions */}
        <ListGroup flush>
          <ListGroupItem>
            <Transcation />
          </ListGroupItem>
          {/* map the account transactions */}
          {account.transactions.map((transaction) => (
            <ListGroupItem>
              <Transcation transaction={transaction} />{" "}
            </ListGroupItem>
          ))}
        </ListGroup>

        {/* 30 px space */}
        <div style={{ height: 80 }}></div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* red outlined delete account button in the middle  */}
          <Button
            outline
            color="danger"
            style={{
              borderColor: "red",
              fontSize: 17,
              margin: 5,
              padding: 13,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 10,
            }}
            onClick={() => {
              setDeleteModal(true);
            }}
          >
            <i className="fa fa-trash" style={{marginRight:5}}/>
            {"Close Account"}
          </Button>
        </div>
      </CardBody>
    </>
  );

  function theDeleteModal() {
    return (
      <Modal
        modalClassName="modal-mini modal-danger"
        toggle={() => setDeleteModal(false)}
        // onClosed={() => setAlert("")}
        isOpen={deleteModal}
      >
        <div>
          <Button
            className="btn-neutral"
            color="link"
            type="button"
            onClick={() => setDeleteModal(false)}
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
              className="fa fa-trash"
              style={{ color: "red" }}
            ></i>
          </div>
        </div>
        <ModalBody>
          <p>Are you sure you want to delete this account?<br/>This action is <b>NOT</b> reversible!</p>
        </ModalBody>

        {/* two actions: cancel and delete */}
        <div className="modal-footer">
          <Button
            className="btn-neutral"
            color="link"
            type="button"
            onClick={() => setDeleteModal(false)}
          >
            Cancel
          </Button>
          <Button
            className="btn-neutral"
            color="link"
            type="button"
            onClick={() => {
              setDeleteModal(false);
              // delete the account
              deleteAccount(account);
              // setAlert("Account deleted successfully");
            }}
          >
            Delete
          </Button>
        </div>
      </Modal>
    );
  }

}

export default AccountTransactions;
