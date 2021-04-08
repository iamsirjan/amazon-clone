import React, { useEffect, useState } from "react";
import "./Orders.css";

import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <div className="orders__order">
        <div className="orders__message">
          {basket["null"] ? (
            <h1>
              !!!!!!!the product you order will be shown here so please go to
              home section and buy some order!!!!!!!
            </h1>
          ) : (
            <marquee>
              Thanks for buying our product.Your product have been shiped to
              your address.
            </marquee>
          )}
        </div>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
