import { useState } from "react";

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
} from "reactstrap";
import ActiveLoan from "./ActiveLoan";
import NonActiveLoan from "./NonActiveLoan";
import ApplyForLoan from "./ApplyForLoan";

function ClientLoans({ loans, setLoans }) {
  const [applyModal, setApplyModal] = useState(false);

  return (
    <>
      <ApplyForLoan modal={applyModal} setModal={setApplyModal} setLoans={setLoans} loans={loans} />
      <CardBody className="text-dark">

        <Row>
          <Col>
            <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
              <b>Loans</b>
            </CardTitle>
          {/* button to add new account */}
            <Button
              onClick={() => {
                setApplyModal(true);
              }}
              color="info"
              style={{
                // color: "#000000",
                // float: "left",
                margin: 5,
                marginTop: 2,

                padding: 10,
                paddingTop: 7,
                paddingBottom: 7,
                borderRadius: 10,
              }}
            >
              <b>Apply For Loan</b>
            </Button>
          </Col>
        </Row>
        {/* 30 px space */}
        <div style={{ height: 30 }}></div>

        {/* Active Loans */}
        <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
            <b>Active Loans</b>
            </CardTitle>
        <ListGroup flush>
          <ListGroupItem>
            <ActiveLoan />
          </ListGroupItem>
          {/* map the account transactions */}
          {loans.map((loan) => (
                        loan.status !== "Active" ? null :

            <ListGroupItem>
              {/* <Transcation transaction={transaction} />{" "} */}
                <ActiveLoan loan={loan}/>
            </ListGroupItem>
          ))}
        </ListGroup>


        {/* Non Active loans */}
        {/* 30 px space */}
        <div style={{ height: 30 }}></div>

        {/* Active Loans */}
        <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
            <b>Non-Active Loans</b>
            </CardTitle>
        <ListGroup flush>
          <ListGroupItem>
            <NonActiveLoan />
          </ListGroupItem>
          {/* map the account transactions */}
          {loans.map((loan) => (
            loan.status === "Active" ? null :
            <ListGroupItem>
              {/* <Transcation transaction={transaction} />{" "} */}
                <NonActiveLoan loan={loan}/>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </>
  );
}

export default ClientLoans;
