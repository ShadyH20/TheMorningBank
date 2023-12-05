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
function formatPts(num) {
  //   format the number to have commas
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function PointsCard({ points, setRedeemModal }) {
  // state to show and hide card number
  //   const [showCardNum, setShowCardNum] = useState(false);

  return (
    <Card
      style={{
        borderRadius: 10,
        marginBottom: 10,
        width: "fit-content",
        // background color should be very dar grey
        background: "#1e1f26",

        // background: "linear-gradient(180deg, #FFFFFF 0%, #ECECEC 100%)",
      }}
      className="text-left"
    >
      <CardBody
        style={{
          paddingTop: 5,
          paddingBottom: 0,
          // round edges
        }}
      >
        {/* row spacing should be space between */}
        <Row
          style={{
            padding: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h7 style={{ color: "#ffffff" }}>Points Balance:</h7>
            <h4 style={{ color: "#b5f2e5", margin: 0, fontWeight: 500 }}>
              {formatPts(points)}
              <span style={{ color: "#ffffff", fontSize: 12 }}>
                {"  Points"}
              </span>
            </h4>
          </div>

          {/* 30 px space */}
          <div style={{ width: 70 }}></div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span style={{ color: "#ffffff", marginTop:-5, marginBottom:5}}>Valid until:</span>
            <h7 style={{ color: "#b5f2e5", margin: 0}}>
              {"31/12/2021"}
            </h7>
          </div>

          {/* space */}
          <div style={{ width: 70 }}></div>

          {/* button to redeem */}
          <button
            size="sm"
            style={{
              borderRadius: 10,
              padding: 12,
              background: "#c6b5f2",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: 12,
                marginLeft: "auto",
            }}
            onClick={() => {
                setRedeemModal(true);
            }}
          >
            {/* present icon */}
            <i
              className="fa fa-gift"
              style={{ marginRight: 8, fontSize: 15 }}
            ></i>
            Redeem
          </button>
        </Row>
      </CardBody>
    </Card>
  );
}

export default PointsCard;
