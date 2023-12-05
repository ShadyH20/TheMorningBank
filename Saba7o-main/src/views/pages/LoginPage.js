import React from "react";

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
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/Navbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

// User Login info
export var database = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "banker",
    password: "banker",
  },
  {
    username: "shady",
    password: "shady",
  },
];

const errors = {
  invalid: "Invlaid username or password",
  uname_empty: "Username cannot be empty",
  pword_empty: "Password cannot be empty",
};

function LoginPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

  // state to store user input
  const [userInput, setUserInput] = React.useState({
    username: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

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

  // Generate JSX code for error message
  const renderErrorMessage = () => {
    return (
      errorMessages != "" && (
        <div className="text-warning">
          <i className="fa fa-exclamation-triangle"></i>
          <span className="">{"   " + errorMessages}</span>
        </div>
      )
    );
  };

  // function to handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInput.username);
    console.log(userInput.password);

    // Check if username or password is empty
    if (userInput.username === "") {
      setErrorMessages(errors.uname_empty);
      return;
    } else if (userInput.password === "") {
      setErrorMessages(errors.pword_empt);
      return;
    }

    // Find user login info
    const userData = database.find(
      (user) => user.username === userInput.username
    );

    // Compare user info
    if (userData) {
      if (userData.password !== userInput.password) {
        // Invalid password
        setErrorMessages(errors.invalid);
      } else {
        setIsSubmitted(true);

        // if admin login redirect to admin page
        if (userData.username === "admin") {
          window.location.href = "/admin";
        }
        // if user login redirect to home page
        else if (userData.username === "banker") {
          window.location.href = "/banker";
        }
        else{
          window.location.href = "/client";
        }
      }
    } else {
      // Username not found
      setErrorMessages(errors.invalid);
    }
  };
  return (
    <>
      {/* <ExamplesNavbar /> */}
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form onSubmit={handleSubmit} className="form" method="">
                  <CardHeader
                    className="text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        width: "65%",
                      }}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/Logo2.png")}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="uname"
                        value={userInput.username}
                        onChange={(e) =>
                          setUserInput({
                            ...userInput,
                            username: e.target.value,
                          })
                        }
                        placeholder="Username..."
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_lock-circle-open"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="password"
                        value={userInput.password}
                        onChange={(e) =>
                          setUserInput({
                            ...userInput,
                            password: e.target.value,
                          })
                        }
                        placeholder="Password..."
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                      {/* button to hide or unhide pasword */}
                      <InputGroupAddon addonType="append">
                        <InputGroupText
                          style={{ paddingLeft: 0, paddingRight: 19 }}
                          onClick={() => togglePasswordHidden()}
                        >
                          <i id="eye" className="fa fa-eye"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    {renderErrorMessage()}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      // inputMode="submit"
                      onClick={handleSubmit}
                      size="lg"
                    >
                      Login
                    </Button>
                    <div className="">
                      <h6>
                        <a
                          className="link"
                          href="/signup"
                          // onClick={(e) => e.preventDefault()}
                        >
                          Create Account
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        {/* <TransparentFooter /> */}
      </div>
    </>
  );
}

export default LoginPage;
