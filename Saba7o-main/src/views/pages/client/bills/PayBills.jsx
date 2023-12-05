import { useState } from "react";

// reactstrap components
// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import Bill from "./Bill";
import PayBillModal from "./PayBillModal";
export default function PayBills({ setBills, bills, accounts }) {
  const [payModal, setPayModal] = useState(false);

  // selected bil
  const [selectedBill, setSelectedBill] = useState(null);

  return (
    <>
      {selectedBill == null ? null : (
        <PayBillModal
          modal={payModal}
          setModal={setPayModal}
          bill={selectedBill}
          accounts={accounts}
          payBill={(accountID, bill) => {
            payTheBill(accountID, bill);
          }}
        />
      )}
      <CardBody className="text-dark">
        <Row>
          <Col>
            <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
              <b>Pay Bills</b>
            </CardTitle>

            <div style={{ height: 30 }}></div>

            <ListGroup flush>
              <ListGroupItem>
                <Bill />
              </ListGroupItem>

              {/* map the account transactions */}
              {bills.map((bill) => (
                <ListGroupItem>
                  {/* <Transcation transaction={transaction} />{" "} */}
                  <Bill
                    bill={bill}
                    accounts={accounts}
                    setSelectedBill={(bill) => {
                      console.log("bill", bill);
                      setSelectedBill(bill);
                      setPayModal(true);
                    }}
                  />
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
        {/* 30 px space */}
        <div style={{ height: 30 }}></div>
      </CardBody>
    </>
  );

  function payTheBill(accountID, bill) {
    console.log("accountID", accountID);
    console.log("bill", bill);

    // deduct the amount from the account
    let account = accounts.find((a) => a.id == accountID);
    account.balance -= bill.amount;

    // add a transaction to the account
    account.transactions = [
      {
        id: crypto.randomUUID(),
        date: new Date().toISOString().slice(0, 10),
        amount: -bill.amount,
        description: bill.type +  " Bill Payment",
      },
      ...account.transactions,
    ];

    // remove the bill from the bills
    setBills(bills.filter((b) => b.id != bill.id));

    // close the modal
    setPayModal(false);
  }
}
