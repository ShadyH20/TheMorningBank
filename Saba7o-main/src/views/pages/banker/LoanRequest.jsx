import React from "react";
// import { egp } from "../accounts and cards/AccountCard";

import { CardTitle, Row } from "reactstrap";

// import CardField from "../accounts and cards/CardField";
import { duration } from "moment";
import CardField from "../client/accounts and cards/CardField";
import { egp } from "../client/accounts and cards/AccountCard";

function LoanRequest({ loan, deleteLoan }) {
  var ratio = "12%";
  return (
    <Row
      style={{
        justifyContent: "space-between",
        alignItems: "center",
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
            title={"Bill / month"}
            value={""}
            alignLeft
            style={{ width: ratio }}
          />
          <CardField
            title={"Status"}
            value={""}
            alignLeft
            style={{ display: "flex", flexDirection: "column", width: ratio }}
          />
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
            value={loan.status.toUpperCase()}
            alignLeft
            style={{
              display: "flex",
              flexDirection: "column",
              width: ratio,
              fontWeight: "bold",
              color: loan.status === "Pending" ? "orange" : "red",
            }}
          />

          {/* two buttons to accept or reject */}
          <div >
            <button className="btn btn-success" onClick={(e)=> {deleteLoan(loan)} }>Accept</button>
            <button className="btn btn-danger" onClick={(e)=> {deleteLoan(loan)} }>Reject</button>
          </div>


        </>
      )}
    </Row>
  );
}

export default LoanRequest;
