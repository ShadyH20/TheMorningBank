import React from "react";
import { egp } from "./AccountCard";
import { CardTitle, Row } from "reactstrap";
import CardField from "./CardField";

function Transcation(transactionBig) {
  var transaction = transactionBig.transaction;
  return (
    <Row
      style={{
        justifyContent: "space-between",
      }}
    >
      {transaction === undefined ? (
        <>
          <CardField
            title={"Transaction Date"}
            value={""}
            alignLeft
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          />
          <div style={{ width: "33%" }}>
            <CardField
              title={"Description"}
              value={""}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>
          <CardField title={"Amount"} value={""} alignRight  style={{ width: "20%" }}/>
        </>
      ) : (
        <>
          <CardField
            title={""}
            value={transaction.date}
            alignLeft
            style={{ display: "flex", flexDirection: "column" , width: "15%" }}
          />
          <div style={{ width: "33%" }}>
            <CardField
              title={""}
              value={transaction.description}
              alignLeft
              style={{ display: "flex", flexDirection: "column"  }}
            />
          </div>
          <CardField
            title={""}
            value={(transaction.amount > 0 ? "+":"")+egp.format(transaction.amount)}
            alignRight
            style={{ width: "20%" }}
          />
        </>
      )}
    </Row>
  );
}

export default Transcation;
