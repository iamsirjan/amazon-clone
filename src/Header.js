import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://active8studios.co.uk/wp-content/uploads/Amazon-Logo-schwarz.jpg"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchinput" type="text" />
        <SearchIcon className="header__searchlogo" />
      </div>

      <div className="header__nav">
        <Link to={user ? "/" : "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionlineone">
              Hello, {user ? user?.email : "guest"}
            </span>
            <span className="header__optionlinetwo">
              {user ? "sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to={user ? "/orders" : "/login"}>
          <div className="header__option">
            <span className="header__optionlineone">Return</span>
            <span className="header__optionlinetwo">&order</span>
          </div>
        </Link>

        <a href="https://www.primevideo.com/?ref_=dvm_pds_amz_NP_kc_s_g|m_E3oTEnAEc_c415615227551">
          <div className="header__option">
            <span className="header__optionlineone">Your</span>
            <span className="header__optionlinetwo">Prime</span>
          </div>
        </a>

        <Link to={user ? "/checkout" : "/login"}>
          {user ? (
            <div className="header__optionbasket">
              <ShoppingBasketIcon />

              <span className="header__optionlinetwo header__basketcount">
                {basket?.length}
              </span>
            </div>
          ) : (
            <h1></h1>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Header;
