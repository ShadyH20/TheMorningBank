

import React from "react";

// reactstrap components
import {
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
    
    } from "reactstrap";

function ClientDashboard() {
    return (
        <>
          <CardBody>
            <Row>
              <Col md="7" style={{ paddingRight: 0, height: 560 }}>
                {/* row containing 2 60-40 cards */}
                {/* this row should be 30% of the column height */}
                <Row sm="3">
                  <Col md="6">
                    <Card
                      style={{ background: "#edfbff" }}
                      className="text-dark text-left"
                    >
                      <CardBody>
                        <Col style={{ padding: 0 }}>
                          <CardTitle tag="h7">
                            <b>Total Balance</b>
                          </CardTitle>
                          <h4 className="no-margin no-padding">
                            <b>EGP 10,000.00</b>
                          </h4>
                          {/* row containing income then expenses */}
                          <Row>
                            <Col>
                              <CardTitle
                                style={{ fontSize: 11 }}
                                className="no-margin no-padding"
                              >
                                Income
                              </CardTitle>
                              <h7
                                style={{ fontSize: 13 }}
                                className="no-margin no-padding"
                              >
                                <b>EGP 30,000.00</b>
                              </h7>
                            </Col>

                            <Col className="no-margin no-padding">
                              <CardTitle
                                style={{ fontSize: 11 }}
                                className="no-margin no-padding"
                              >
                                Expenses
                              </CardTitle>
                              <h7
                                style={{ fontSize: 13 }}
                                className="no-margin no-padding"
                              >
                                <b>EGP 20,000.00</b>
                              </h7>
                            </Col>
                          </Row>
                        </Col>
                      </CardBody>
                    </Card>
                  </Col>
                  {/* 33 % of height as well */}
                  <Col md="5">
                    <Card
                      style={{ background: "#edfbff" }}
                      className="text-dark text-left"
                    >
                      <CardBody>
                        <Col style={{ padding: 0 }}>
                          <CardTitle tag="h7">
                            <b>Total Savings</b>
                          </CardTitle>
                          <h4 className="no-margin no-padding">
                            <b>EGP 5,000.00</b>
                          </h4>
                          {/* row containing income then expenses */}
                          {/* <Row>
                              <Col>
                                  <CardTitle style={{fontSize:11}} className="no-margin no-padding">
                                    Income
                                  </CardTitle>
                                  <h7  style={{fontSize:13}}className="no-margin no-padding">
                                    <b>EGP 30,000.00</b>
                                  </h7>
                                </Col>

                                <Col className="no-margin no-padding">
                                  <CardTitle style={{fontSize:11}} className="no-margin no-padding">
                                    Expenses
                                  </CardTitle>
                                  <h7  style={{fontSize:13}}className="no-margin no-padding">
                                    <b>EGP 20,000.00</b>
                                  </h7>
                                </Col>
                              </Row> */}
                        </Col>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col md="5" style={{ paddingLeft: 0 }}>
                <Card
                  // style={{ background: "#edfbff" }}
                  className="text-dark text-left"
                >
                  <CardBody>
                    <Col style={{ padding: 0 }}>
                      <CardTitle tag="h7">
                        <b>Total Balance</b>
                      </CardTitle>
                      <h4 className="no-margin no-padding">
                        <b>EGP 10,000.00</b>
                      </h4>
                      {/* row containing income then expenses */}
                      <Row>
                        <Col>
                          <CardTitle
                            style={{ fontSize: 11 }}
                            className="no-margin no-padding"
                          >
                            Income
                          </CardTitle>
                          <h7
                            style={{ fontSize: 13 }}
                            className="no-margin no-padding"
                          >
                            <b>EGP 30,000.00</b>
                          </h7>
                        </Col>

                        <Col className="no-margin no-padding">
                          <CardTitle
                            style={{ fontSize: 11 }}
                            className="no-margin no-padding"
                          >
                            Expenses
                          </CardTitle>
                          <h7
                            style={{ fontSize: 13 }}
                            className="no-margin no-padding"
                          >
                            <b>EGP 20,000.00</b>
                          </h7>
                        </Col>
                      </Row>
                    </Col>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </>
      );
    
}

export default ClientDashboard;