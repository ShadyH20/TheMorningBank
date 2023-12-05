import React from "react";
import { useState } from "react";
import { Card, CardBody, CardTitle, Row, Col, Button } from "reactstrap";
import CardField from "./CardField";

// // convert number to EGP format
// function egp(num) {
//     return "EGP " + num.toFixed(2);
// }

let egp = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EGP",
});

// function to show only the first 4 and last 3 digits of the card number
function cardNum(num) {
  return num.slice(0, 4) + "xxxx xxxxx" + num.slice(-3);
}

function CardCard({ card, setSelectedCard, noBtn }) {
  // state to show and hide card number
  const [showCardNum, setShowCardNum] = useState(false);

  return (
    <Card
      style={{ background: "", borderRadius: 10, marginBottom: 10 }}
      className="text-dark text-left"
    >
      <CardBody
        style={{
          paddingTop: 5,
          paddingBottom: 0,
          // round edges
        }}
      >
        {/* row spacing should be space between */}
        <Row style={{ padding: 10, justifyContent: "space-between" }}>
          <Row style={{ paddingLeft: noBtn ? 15 : 0 }}>
            {!noBtn && (
              <Button
              size="sm"
              color="info"
              onClick={() => {setSelectedCard(card)}}
              style={{
                marginRight: 10,
                marginLeft: 10,
                marginTop: 4,
                marginBottom: 4,
                paddingLeft: 11,
                paddingRight: 11,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: 10,
              }}
            >
              <i
                className="fa fa-chevron-right fa-2x"
                style={{
                  color: "#23252c",
                  fontSize: 17,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              />
            </Button>
            )}
            <CardField title="Card Number" value={showCardNum ? card.cardNumber : cardNum(card.cardNumber)} />
            {/* eye button to hide and unhide card number */}
            <i
              className={"fa fa-eye" + (showCardNum ? "-slash" : "")}
              onClick={() => { setShowCardNum(!showCardNum)}}
              style={{
                fontSize: 15,
                padding: 0,
                paddingTop: 4,
                paddingLeft: 5,
              }}
            />
          </Row>
          <CardField title="Card Holder Name" value={card.name} />
          <CardField title="Card Type" value={card.type} />
          <CardField title="Current Balance" value={egp.format(card.balance)} />
          <CardField title="Bill Amount" value={egp.format(card.bill)} />
          <CardField title="Due Date" value={card.dueDate} />
        </Row>
      </CardBody>
    </Card>
  );
}

export default CardCard;
