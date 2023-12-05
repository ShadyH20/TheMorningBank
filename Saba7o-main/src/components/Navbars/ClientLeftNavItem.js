
import React, { useState } from "react";
// reactstrap components
import {
    Row,
    NavItem,
    NavLink,
  } from "reactstrap";

function ClientLeftNavItem({ pill, pills, setPills, icon, text}) {

    // hover effect on nav item to make it have a background color
    return <><NavItem style={{ width: "90%" }}>
    <NavLink
      className={"left-nav " + (pills === pill ? "active" : "")}
      onClick={(e) => {
        if(text == "Logout") {
          // localStorage.removeItem("token");
          window.location.href = "/login";
          return;
        }
        e.preventDefault();
        setPills(pill);
      }}

    >
      <Row style={{ paddingLeft: 10 }}>
        <i style={{paddingTop:3}} className={icon}></i>
        <span style={{ paddingLeft: 10 }}>{text}</span>
      </Row>
    </NavLink>
  </NavItem>
  </>
    
}

export default ClientLeftNavItem;