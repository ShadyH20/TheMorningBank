import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

function NotifCard({ notif, deleteNotif }) {
  return (
    <>
      <Card
        className="card-plain"
        style={{
          backgroundColor: "#f8f9fa",
          borderRadius: 10,
          padding: 0,
          margin: 0,
        }}
      >
        <CardBody
          style={{
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            {/* bell icon  */}
            <Col>
              <i
                className="fa fa-bell"
                style={{ color: "black", fontSize: 35, padding: 0, margin: 0 }}
              ></i>
            </Col>

            <Col>
              <h6 className="text-left">{notif.title}</h6>
              <h7 className="text-left">{notif.description}</h7>
            </Col>

            <Col>
              {/* x button */}
              
              <h6 className="text-right" style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
              <i
                className="fa fa-times"
                onClick={( ) => {deleteNotif(notif)}}
                style={{ color: "black", fontSize: 15, padding: 0, margin: 0 }}
              ></i>
              <div style={{height: 15}}></div>
                {notif.date}</h6>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}

export default NotifCard;
