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
import AccountCard from "./AccountCard";
import CardCard from "./CardCard";
import Transcation from "./Transaction";
import CardField from "./CardField";
import PointsCard from "./PointsCard";
import RedeemPoints from "./RedeemPoints";

function CardTransactions({ card, back, setCards, setAccounts, accounts, cards, selectedCard }) {
  const [redeemModal, setRedeemModal] = useState(false);

  return (
    <>
      <RedeemPoints
        modal={redeemModal}
        setModal={setRedeemModal}
        setAccounts={setAccounts}
        setCards={setCards}
        points={card.points}
        accounts={accounts}
        cards={cards}
        selectedCard={selectedCard}
      />
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
              <b>Card Transactions</b>
            </CardTitle>
          </Col>
        </Row>
        {/* account card */}
        <CardCard card={card} noBtn />

        {/* 30 px space */}
        <div style={{ height: 30 }}></div>

        <PointsCard points={card.points} setRedeemModal={setRedeemModal} />

        {/* 30 px space */}
        <div style={{ height: 30 }}></div>

        {/* transactions */}
        <ListGroup flush>
          <ListGroupItem>
            <Transcation />
          </ListGroupItem>
          {/* map the account transactions */}
          {card.transactions.map((transaction) => (
            <ListGroupItem>
              <Transcation transaction={transaction} />{" "}
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </>
  );
}

export default CardTransactions;
