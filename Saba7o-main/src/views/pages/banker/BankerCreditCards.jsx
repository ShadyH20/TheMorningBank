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
import CardCard from "../client/accounts and cards/CardCard";
import CardRequest from "./CardRequest";
// import ActiveLoan from "./ActiveLoan";
// import NonActiveLoan from "./NonActiveLoan";
// import ApplyForLoan from "./ApplyForLoan";

function BankerCreditCards({ cards, setCards }) {
  const [applyModal, setApplyModal] = useState(false);

  return (
    <>
      <CardBody className="text-dark">
        <Row>
          <Col>
            <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
              <b>Credit Cards</b>
            </CardTitle>
          </Col>
        </Row>

        {/* Non Active loans */}
        {/* 30 px space */}
        <div style={{ height: 30 }}></div>

        {/* Active Loans */}
        <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
          <b>Requests</b>
        </CardTitle>
        <ListGroup flush>
          {/* accounts */}
            <ListGroupItem>
                <CardRequest />
            </ListGroupItem>

          {/* map the account transactions */}
          {cards.map((card) => (
            <ListGroupItem>
              <CardRequest
                card={card}
                deleteCard={(card) => {
                  console.log("card", card);
                  const newCards = cards.filter((c) => c.id !== card.id);
                  setCards(newCards);
                }}
              />
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </>
  );
}

export default BankerCreditCards;
