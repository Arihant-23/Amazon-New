import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
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
          className="header_logo"
          src="https://img.freepik.com/free-vector/online-shop-application-marketplace-vector-icon-web-store-market-online-shop-mobile-phone-app-button-buy-sale-digital-store-market-smart-shopping-delivery-technology_8071-6849.jpg?w=2000"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchinput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div onClick={handleAuthentication} className="header_option">
          <Link to={!user && "/login"}>
            <span className="header_optionlineone">
              <b>
                {" "}
                Hello {!user ? "Guest" : user.email} <br></br>
              </b>
            </span>
            <span className="header_optionlinetwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </Link>
        </div>
        <div className="header_option">
          <span className="header_optionlineone">Returns</span>
          <span className="header_optionlinetwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineone">Your</span>
          <span className="header_optionlinetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span
              className="header_optionallinetwo 
                 header_basketCount"
            >
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
