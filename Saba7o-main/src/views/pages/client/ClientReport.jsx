

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Label,
    Modal,
    ModalBody,

} from "reactstrap";

function ClientReport() {
    const [modal, setModal] = useState(false);
    const [alert, setAlert] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    return (
        <>
        {successModal()}
        <div className="modal-body" style={{ padding: 15 }}>
          <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
            <b>Report a Problem</b>
          </CardTitle>
          <div style={{height: 100}} />
          <Form
            onSubmit={(e) => {
              {
                onFormSubmit(e);
              }
            }}
          ><div className="form-row">



          <FormGroup className="col-md-4">
            <label htmlFor="inputAccType">Problem Type</label>
            <Input
              id="inputAccType"
              type="select"
              onChange={(e) => {
                // setAccTypeDisabled(e.target.value !== "Other");
                setType(e.target.value);
              }}
            >
              <option selected="">Choose...</option>
              <option>Technical Issue</option>
              <option>Credit Card Theft</option>
              <option>Credit Card Loss</option>
              <option>Credit Card Damage</option>
            </Input>
          </FormGroup>
        </div>
            <div className="form-row">
              <FormGroup className="col-md-6">
                <label htmlFor="inputEmail4">Problem Description</label>
                <Input
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  id="inputEmail4"
                  placeholder="Name"
                  type="text"
                ></Input>
              </FormGroup>
            </div>
    

            {/* error text to the left */}
            <Row
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                paddingLeft: 15,
                paddingRight: 15,
                paddingBottom: 0,
                marginBottom: 0,
              }}
            >
              <div className="text-left text-danger">
                {alert === "" ? null : (
                  <i className="now-ui-icons ui-1_bell-53"></i>
                )}
                {"     " + alert}
              </div>
              {/* add and cancel buttons on the right */}
              <div className="text-right">
                
                <Button color="info" type="submit">
                  <b>Submit Report</b>
                </Button>
              </div>
            </Row>
          </Form>
        </div>
        </>
    );

    function onFormSubmit(e) {
        e.preventDefault();

        if (type === "") {
            setAlert("Please choose a problem type");
            return;
        }
        if (description === "") {
            setAlert("Please enter a description");
            return;
        }
        setAlert("Thank you for your report. We will get back to you soon.");
        setModal(true);


    }


    function successModal() {
        return (
          <Modal
            modalClassName={"modal-mini modal-success"}
            toggle={() => setModal(false)}
            onClosed={() => setAlert("")}
            isOpen={modal}
          >
            <div>
              <Button
                className="btn-neutral"
                color="link"
                type="button"
                onClick={() => setModal(false)}
                style={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  float: "right",
                  fontSize: 17,
                }}
              >
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </Button>
            </div>
            <div className="modal-header justify-content-center">
              <div className="modal-profile">
                <i
                  // bell icon
                  className="now-ui-icons ui-1_check"
                  style={{ color: "green" }}
                ></i>
              </div>
            </div>
            <ModalBody>
              <p>{alert}</p>
            </ModalBody>
          </Modal>
        );
      }

    
}

export default ClientReport;