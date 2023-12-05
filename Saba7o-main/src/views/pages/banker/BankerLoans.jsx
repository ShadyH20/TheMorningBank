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
import LoanRequest from "./LoanRequest";
// import ActiveLoan from "./ActiveLoan";
// import NonActiveLoan from "./NonActiveLoan";
// import ApplyForLoan from "./ApplyForLoan";

function BankerLoans({ loans, setLoans }) {
  const [applyModal, setApplyModal] = useState(false);

  return (
    <>
      <CardBody className="text-dark">
        <Row>
          <Col>
            <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
              <b>Loans</b>
            </CardTitle>
          </Col>
        </Row>

        {/* Non Active loans */}
        {/* 30 px space */}
        <div style={{ height: 30 }}></div>

        {/* Active Loans */}
        <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
          <b>Loan Requests</b>
        </CardTitle>
        <ListGroup flush>
          <ListGroupItem>
            <LoanRequest />
          </ListGroupItem>
          {/* map the account transactions */}
          {loans.map((loan) => (
            <ListGroupItem>
              <LoanRequest
                loan={loan}
                deleteLoan={(loan) => {
                  console.log("loan", loan);
                  const newLoans = loans.filter((l) => l.id !== loan.id);
                  setLoans(newLoans);
                }}
              />
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </>
  );
}

export default BankerLoans;
