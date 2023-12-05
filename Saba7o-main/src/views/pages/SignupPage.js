import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row,
  CardTitle,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/Navbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import { database } from "./LoginPage";

function SignupPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  // function to toggle password hidden or unhidden
  const togglePasswordHidden = () => {
    var x = document.getElementById("password");
    // get the eye icon
    var y = document.getElementById("eye");
    if (x.type === "password") {
      x.type = "text";
      y.className = "fa fa-eye-slash";
    } else {
      x.type = "password";
      y.className = "fa fa-eye";
    }
  };
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Row>
              <Card
                className="card-signup"
                data-background-color="blue"
                style={{
                  borderRadius: "15px",
                }}
              >
                <Form
                  onSubmit={(e) => {
                    signUpSubmit(e);
                  }}
                  className="form"
                  method=""
                >
                  <CardHeader className="text-center">
                    <CardTitle className="title-up" tag="h3">
                      Sign Up
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                  <InputGroup
                      className={
                        "no-border" + (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="username"
                        placeholder="UserName..."
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border" + (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="firstName"
                        placeholder="First Name..."
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border" + (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="lastName"
                        placeholder="Last Name..."
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border" + (emailFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="email"
                        placeholder="Email..."
                        type="text"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      ></Input>
                    </InputGroup>

                    {/* password */}
                    <InputGroup
                      className={
                        "no-border" + (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_lock-circle-open"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="password"
                        placeholder="Password..."
                        type="password"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>

                    {/* confirm */}
                    <InputGroup
                      className={
                        "no-border" + (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_lock-circle-open"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="password2"
                        placeholder="Confirm Password..."
                        type="password"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-neutral btn-round"
                      color="info"
                      href="#pablo"
                      type="submit"
                      size="lg"
                      onClick={(e) => {signUpSubmit(e);}}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Row>
          </Container>
        </div>
        {/* <TransparentFooter /> */}
      </div>
    </>
  );

  function signUpSubmit(e) {
    //  get the elements by id
    var username = document.getElementById("username").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;

    // check if the username is empty
    if (username == "") {
      alert("Username cannot be empty");
      return;
    }

    // check password empty
    if (password == "") {
      alert("Password cannot be empty");
      return;
    }

    // check if the passwords match
    if (password != password2) {
      alert("Passwords do not match");
      return;
    }

    // create the user object

    // send the user object to the server
    database.push(
      {
        username: username,
        password: password,
      },
    )

    // alert success
    alert("User created successfully!");

    // redirect to login page
    window.location.href = "/client";
  }
}

export default SignupPage;
