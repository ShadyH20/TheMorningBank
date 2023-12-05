import { useState, useEffect } from "react";

// reactstrap components
import {
  Col,
} from "reactstrap";

// css for this page
import "../../assets/css/now-ui-kit.css";

import ExamplesNavbar from "components/Navbars/Navbar";
import ClientLeftNav from "components/Navbars/ClientLeftNav";
import ClientDashboard from "./client/Dashboard";
import ClientTransfer from "./client/Transfer";
import ClientAccountsCards from "./client/accounts and cards/AccountsCards";
import ClientLoans from "./client/loans/Loans";
import PayBills from "./client/bills/PayBills";
import NotificationsPage from "./client/notifications/NotificationsPage";
import ClientReport from "./client/ClientReport";

const initialAccounts = [
  {
    id: crypto.randomUUID(),
    accountNumber: "1234567891018",
    actual: 10000,
    balance: 10000,
    type: "Checking Account",
    transactions: [
      {
        id: crypto.randomUUID(),
        date: "2021-05-01",
        amount: -1000,
        description: "Salary",
      },
      {
        id: crypto.randomUUID(),
        date: "2021-05-01",
        amount: -3500,
        description: "Purchase from Amazon",
      },
      {
        id: crypto.randomUUID(),
        date: "2021-05-01",
        amount: +5000,
        description: "Transfer from Shady Hani",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    accountNumber: "1234567891018",
    actual: 8000,
    balance: 8000,
    type: "Savings Account",
    transactions: [
      {
        id: crypto.randomUUID(),
        date: "2021-05-01",
        amount: 1000,
        description: "Salary",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    accountNumber: "1234567891018",
    actual: 2000,
    balance: 2000,
    type: "Budget Account",
    transactions: [
      {
        id: crypto.randomUUID(),
        date: "2021-05-01",
        amount: 1000,
        description: "Salary",
      },
    ],
  },
];

const initialCards = [
  {
    id: crypto.randomUUID(),
    cardNumber: "4141123456789123",
    name: "Shady Hani",
    type: "Visa Credit Platinum",
    balance: 10000,
    bill: 3967,
    dueDate: "2024-05-01",
    points: 99999,
    transactions: [
      {
        id: crypto.randomUUID(),
        date: "2021-05-01",
        amount: -1000,
        description: "Salary",
      },
      {
        id: crypto.randomUUID(),
        date: "2021-05-01",
        amount: -3500,
        description: "Purchase from Amazon",
      },
      {
        id: crypto.randomUUID(),
        date: "2021-05-01",
        amount: -5000,
        description: "Transfer from Shady Hani",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    cardNumber: "4792121860359321",
    name: "Hady Shani",
    type: "Visa Credit Gold",
    balance: 10000,
    bill: 1468,
    dueDate: "2024-05-01",
    points: 77777,

    transactions: [
      {
        id: crypto.randomUUID(),
        date: "2021-05-01",
        amount: -1000,
        description: "Salary",
      },
      {
        id: crypto.randomUUID(),
        date: "2021-05-01",
        amount: -3500,
        description: "Purchase from Amazon",
      },
      {
        id: crypto.randomUUID(),
        date: "2021-05-01",
        amount: +5000,
        description: "Transfer from Hani Shady",
      },
    ],
  },
];

const initialLoans = [
  {
    id: crypto.randomUUID(),
    loanNumber: "1234567891018",
    type: "Personal",
    amount: 100000,
    duration: 36,
    status: "Active",
    dueDate: "2023-06-10",
  },
  {
    id: crypto.randomUUID(),
    loanNumber: "987649746438",
    type: "Car",
    amount: 200000,
    duration: 24,
    status: "Pending",
    dueDate: "",
  },
  {
    id: crypto.randomUUID(),
    loanNumber: "5678976543",
    type: "Personal",
    amount: 330000,
    duration: 48,
    status: "Rejected",
    dueDate: "",
  },
];


// gas/ water/ electricity/ telephone
const initialBills= [
  {
    id: crypto.randomUUID(),
    billNumber: "4567",
    type: "Gas",
    amount: 90,
    dueDate: "2023-06-10",
  },
  {
    id: crypto.randomUUID(),
    billNumber: "3925",
    type: "Water",
    amount: 270,
    dueDate: "2023-06-10",
  },
  {
    id: crypto.randomUUID(),
    billNumber: "9812",
    type: "Electricity",
    amount: 1200,
    dueDate: "2023-06-10",
  },
  {
    id: crypto.randomUUID(),
    billNumber: "8456",
    type: "Telephone",
    amount: 60,
    dueDate: "2023-06-10",
  },
]

const initialNotifications = [
  {
    id: crypto.randomUUID(),
    type: "Reminder",
    title: "Loan Payment coming up!",
    description: "You have a loan payment coming up on 10/06/2023",
    date: "2023-05-29",

  },
  {
    id: crypto.randomUUID(),
    type: "Reminder",
    title: "Credit Card Payment coming up!",
    description: "You have a credit card payment coming up on 10/06/2023",
    date: "2023-05-30",

  },
  {
    id: crypto.randomUUID(),
    type: "Reminder",
    title: "Electricity Bill Payment coming up!",
    description: "You have an electricity bill payment coming up on 13/06/2023",
    date: "2023-05-31",
  },
  {
    id: crypto.randomUUID(),
    type: "Notification",
    title: "Technical Issue solved!",
    description: "This is a notification to inform you that the technical issue you reported has been solved.",
    date: "2023-06-01",
  },
  
]


export default function ClientPage() {;
  const [pills, setPills] = useState(() => {
    return JSON.parse(localStorage.getItem("pills")) || "1";
  });
  const [accounts, setAccounts] = useState(() => {
    // clear localStorage
    // localStorage.clear();
    return JSON.parse(localStorage.getItem("accounts")) || initialAccounts;
  });

  const [cards, setCards] = useState(() => {
    const cards = localStorage.getItem("cards");
    if (cards == null) {
      return initialCards;
    }

    return JSON.parse(cards);
  });

  const [loans, setLoans] = useState(() => {
    const loans = localStorage.getItem("loans");
    if (loans == null) {
      return initialLoans;
    }

    return JSON.parse(loans);
  });

  const [bills, setBills] =  useState(() => {
    const bills = localStorage.getItem("bills");
    if (bills == null) {
      return initialBills;
    }

    return JSON.parse(bills);
  });

  const [notifications, setNotifications] = useState(() => {
    const notifications = localStorage.getItem("notifications");
    if (notifications == null) {
      return initialNotifications;
    }
  });


  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("cards", JSON.stringify(cards));
    localStorage.setItem("loans", JSON.stringify(loans));
    localStorage.setItem("pills", JSON.stringify(pills));
    localStorage.setItem("bills", JSON.stringify(bills));

  }, [accounts, cards, loans, pills, bills]);

  const tabs = {
    1: ClientDashboard(),
    2: ClientTransfer({ accounts, setAccounts }),
    4: ClientAccountsCards({ accounts, cards, setAccounts, setCards }),
    5: ClientLoans({ loans, setLoans }),
    6: PayBills({bills, setBills, accounts, setAccounts, }),
    7: NotificationsPage({notifications, setNotifications}),
    8: ClientReport()
  };

  function tabContent() {
    return tabs[pills];
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        {/* a menu occupying the left 1/3 of the screen containing the following:*/}
        <ClientLeftNav pills={pills} setPills={setPills} />
        {/* a main section occupying the right 2/3 of the screen containing data for each of the sections above */}
        <Col
          style={{ flexGrow: 4, overflowY: "scroll", height: "100vh" }}
          className="no-margin no-padding"
        >
          {tabContent()}
        </Col>
        {/* </Row> */}
        {/* </Container> */}
      </div>
    </>
  );
}
