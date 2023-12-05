import React, { useState } from "react";
// reactstrap components
import { Container, Col, Nav, Card, CardHeader, NavbarBrand } from "reactstrap";
import ClientLeftNavItem from "./ClientLeftNavItem";

function BankerLeftNav({ pills, setPills }) {
  return (
    <>
      <Col
        className="no-padding no-margin"
        style={{
          flexGrow: 1,

          // backgroundColor: "#f5f5f5",
          // very very light blue
          // lighter
          backgroundColor: "#f1f6f8",
          height: "100vh",
          // space between
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div>
          {/* logo */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: 25,
              // height: "10%",
            }}
          >
            <img
              src={require("assets/img/Logo1.png")}
              style={{ width: "65%" }}
            />


            {/* horizontal divider */}
            <hr style={{ width: "80%", backgroundColor: "#e8e8e8" }} />
          </div>
          <Nav className="flex-column" data-tabs="tabs" tabs>
            
          <ClientLeftNavItem
              pill="4"
              pills={pills}
              setPills={setPills}
              // icon="now-ui-icons business_money-coins"
              icon="fa fa-credit-card"
              text="Credit Card Requests"
            />
            <ClientLeftNavItem
              pill="5"
              pills={pills}
              setPills={setPills}
              // icon="now-ui-icons business_money-coins"
              icon="fa fa-piggy-bank"
              text="Loan Requests"
            />
           
            <ClientLeftNavItem
              pill="7"
              pills={pills}
              setPills={setPills}
              // icon="now-ui-icons business_money-coins"
              
              // bell
              icon="fa fa-bell"
              text="Notifications"
            />
          </Nav>
        </div>

        {/* loagout button */}
        <Nav className="flex-column" data-tabs="tabs" tabs>
          <ClientLeftNavItem
            pill="10"
            pills={pills}
            setPills={setPills}
            icon="fa fa-sign-out-alt"
            text="Logout"
          />
        </Nav>
      </Col>
    </>
  );
}

export default BankerLeftNav;
