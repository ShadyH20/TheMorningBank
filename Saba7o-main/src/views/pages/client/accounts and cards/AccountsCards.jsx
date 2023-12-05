import { useState } from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Row, Col, Button } from "reactstrap";
import AccountCard from "./AccountCard";
import CardCard from "./CardCard";
import AccountTransactions from "./AccountTransactions";
import CardTransactions from "./CardTransactions";
import CardField from "./CardField";
import AddNewAccount from "./AddNewAccount";
import AddNewCard from "./AddNewCard";

function ClientAccountsCards({ accounts, cards, setAccounts, setCards }) {
  // state for which account is selected
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const [accModal, setAccModal] = useState(false);
  const [cardModal, setCardModal] = useState(false);

  function mainPage() {
    return (
      <>
        <Row>
          <Col>
            <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
              <b>Accounts</b>
            </CardTitle>
          </Col>
          {/* button to add new account */}
          <Col>
            <Button
              onClick={() => {
                setAccModal(true);
              }}
              color="info"
              style={{
                // color: "#000000",
                float: "right",
                margin: 5,
                marginTop: 2,

                padding: 10,
                paddingTop: 7,
                paddingBottom: 7,
                borderRadius: 10,
              }}
            >
              <b>Add New</b>
            </Button>
          </Col>
        </Row>
        {/* accounts */}
        {accounts.map((account) => (
          <AccountCard
            account={account}
            setSelectedAccount={setSelectedAccount}
          />
        ))}

        {/* 30 px space */}
        <div style={{ height: 30 }}></div>

        {/* CARDS */}
        <Row>
          <Col>
            <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
              <b>Cards</b>
            </CardTitle>
          </Col>
          {/* button to add new account */}
          <Col>
            <Button
              onClick={() => {
                setCardModal(true);
              }}
              color="info"
              style={{
                float: "right",
                margin: 5,
                marginTop: 2,
                padding: 10,
                paddingTop: 7,
                paddingBottom: 7,
                borderRadius: 10,
              }}
            >
              <b>Add New</b>
            </Button>
          </Col>
        </Row>
        {/* accounts */}
        {cards.map((card) => (
          <CardCard card={card} setSelectedCard={setSelectedCard} />
        ))}
      </>
    );
  }

  return (
    <>
      <AddNewAccount
        modal={accModal}
        setModal={setAccModal}
        setAccounts={setAccounts}
      />
      <AddNewCard
        modal={cardModal}
        setModal={setCardModal}
        setCards={setCards}
      />
      <CardBody className="text-dark">
        {selectedAccount === null && selectedCard === null ? (
          mainPage()
        ) : selectedAccount !== null ? (
          <AccountTransactions
            account={selectedAccount}
            back={() => {
              setSelectedAccount(null);
            }}
            deleteAccount={() => {
              setAccounts(accounts.filter((acc) => acc !== selectedAccount));
              setSelectedAccount(null);
            }}
          />
        ) : (
          <CardTransactions
            card={selectedCard}
            back={() => {
              setSelectedCard(null);
            }}
            setAccounts={setAccounts}
            setCards={setCards}
            accounts={accounts}
            cards={cards}
            selectedCard={selectedCard}
          />
        )}
      </CardBody>
    </>
  );
}

export default ClientAccountsCards;
