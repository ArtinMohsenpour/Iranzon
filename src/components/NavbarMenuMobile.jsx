import React from "react";

// icons
import { FiX } from "react-icons/fi";

import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { categories } from "../context/Data";

import "./Header.scss";
import { logoNavbar } from "../assets";
import { FiMenu, FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

function NavbarMenuMobile() {
  return (
    <div className="navbar__container">
      <div className="logo__container">
        <img src={logoNavbar} />
      </div>
      <div className="searchbar__container">
        <input placeholder="...جستجو محصول" />
        <button>
          <FiSearch />
        </button>
      </div>
      <div className="login__cart_container">
        <div className="login">
          <p>ورود | ثبت نام</p>
        </div>
        <div className="cart">
          <div />
          <FiShoppingCart />
          <p>سبد خرید</p>
        </div>
      </div>
      <div className="navbar__menu">
        <FiMenu />
      </div>
    </div>
  );
}

export default NavbarMenuMobile;
