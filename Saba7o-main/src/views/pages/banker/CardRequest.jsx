import React from "react";
// import { egp } from "../accounts and cards/AccountCard";

import { CardTitle, Row } from "reactstrap";

// import CardField from "../accounts and cards/CardField";
import { duration } from "moment";
import CardField from "../client/accounts and cards/CardField";
import { egp } from "../client/accounts and cards/AccountCard";

function CardRequest({ card, deleteCard }) {
  var ratio = "12%";
  return (
    <Row
      style={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {card === undefined ? (
        <>
          <div style={{ width: ratio }}>
            <CardField
              title={"Card Number"}
              value={""}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>
          <div style={{ width: ratio }}>
            <CardField
              title={"Card Holder"}
              value={""}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>

          <div style={{ width: ratio }}>
            <CardField
              title={"Card Type"}
              value={""}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>

          <CardField
            title={"Actions"}
            value={""}
            alignLeft
            style={{ display: "flex", flexDirection: "column", width: ratio }}
          />
        </>
      ) : (
        <>
          <div style={{ width: ratio }}>
            <CardField
              title={""}
              value={card.cardNumber}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>
          <div style={{ width: ratio }}>
            <CardField
              title={""}
              value={card.name}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>

          <div style={{ width: ratio }}>
            <CardField
              title={""}
              value={card.type}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>


          {/* two buttons to accept or reject */}
          <div >
            <button className="btn btn-success" onClick={(e)=> {deleteCard(card)} }>Accept</button>
            <button className="btn btn-danger" onClick={(e)=> {deleteCard(card)} }>Reject</button>
          </div>


        </>
      )}
    </Row>
  );
}

export default CardRequest;
