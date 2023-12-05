import React from "react";
import { egp } from "../accounts and cards/AccountCard";

import { CardTitle, Row } from "reactstrap";

import CardField from "../accounts and cards/CardField";
import { duration } from "moment";

function ActiveLoan({ loan }) {
  var ratio = "16%"
  return (
    <Row
      style={{
        justifyContent: "space-between",
      }}
    >
      {loan === undefined ? (
        <>
          <div style={{ width: ratio }}>
            <CardField
              title={"Loan Number"}
              value={""}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>
          <div style={{ width: ratio }}>
            <CardField
              title={"Type"}
              value={""}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>

          <div style={{ width: ratio }}>
            <CardField
              title={"Total Amount"}
              value={""}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>

          <div style={{ width: ratio }}>
            <CardField
              title={"Duration"}
              value={""}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>
          <CardField
            title={"Bill Amount"}
            value={""}
            alignLeft
            style={{ width: ratio }}
          />
          <CardField
            title={"Bill Due Date"}
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
              value={loan.loanNumber}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>
          <div style={{ width: ratio }}>
            <CardField
              title={""}
              value={loan.type}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>

          <div style={{ width: ratio }}>
            <CardField
              title={""}
              value={egp.format(loan.amount)}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>

          <div style={{ width: ratio }}>
            <CardField
              title={""}
              value={loan.duration + " months"}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>
          <CardField
            title={""}
            value={egp.format(loan.amount / loan.duration)}
            alignLeft
            style={{ width: ratio }}
          />
          <CardField
            title={""}
            value={loan.dueDate}
            alignLeft
            style={{ display: "flex", flexDirection: "column", width: ratio }}
          />
        </>
      )}
    </Row>
  );
}

export default ActiveLoan;
