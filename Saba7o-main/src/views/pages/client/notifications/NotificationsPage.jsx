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
import NotifCard from "./NotifCard";

export default function NotificationsPage({ notifications, setNotifications }) {
  console.log("notifications", notifications);
  const [payModal, setPayModal] = useState(false);

  // selected bil
  //   const [selectedBill, setSelectedBill] = useState(null);

  return (
    <>
      <CardBody className="text-dark">
        <Row>
          <Col>
            <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
              <b>Notifcations</b>
            </CardTitle>

            <div style={{ height: 30 }}></div>

            <ListGroup flush>
              {/* <ListGroupItem>
                <NotifCard notif={notifications[0]} />
              </ListGroupItem> */}

              {/* map the account transactions */}
                {notifications.map((notif) => (
                    <ListGroupItem>
                        <NotifCard notif={notif} deleteNotif={deleteNotif}/>
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

    function deleteNotif(notif) {
        console.log("notif", notif);
        const newNotifs = notifications.filter((n) => n.id !== notif.id);
        setNotifications(newNotifs);
    }


}
