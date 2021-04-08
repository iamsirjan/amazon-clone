import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
        />

        {basket?.length === 0 ? (
          <div>
            <div className="checkout__userinfo">
              <h2>HELLO,</h2>
              <h4>{user?.email} </h4>
            </div>
            <div className="checkout__usermessage">
              <h2> Your Shooping list is empty</h2>
              <p>
                Currently you do have no items in your basket. To add items in
                the basket go and click the add to items button to add them in
                your shooping list
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title"> Your Shooping list </h2>
            <div className="checkout__items">
              <FlipMove>
                {basket.map((item) => (
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </FlipMove>
            </div>
          </div>
        )}
      </div>
      <div className="checkout__right ">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
