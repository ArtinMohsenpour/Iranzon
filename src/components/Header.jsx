import "./Header.scss";
import { logoNavbar } from "../assets";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiX } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [navbarMenuOpen, setNavbarMenuOpen] = useState(false);
  const toggleNavbarMenu = () => {
    setNavbarMenuOpen(!navbarMenuOpen);
  };
  return (
    <header>
      <div className="navbar__container">
        <div className="navbar__mobile">
          <div>
            <span>0</span>
          </div>
          <FiShoppingCart />
        </div>
        <div className="logo__container">
          <img src={logoNavbar} />
        </div>
        <div className="header__message">
          <p>
            با ایران زون هر محصولی را از خارج از کشور به راحتی سفارش دهید
          </p>
        </div>
        <div className="login__cart_container">
          <div className="login">
            <p>ورود | ثبت نام</p>
          </div>
          <div className="cart">
            <div>
              <span>0</span>
            </div>
            <FiShoppingCart />
            <p>سبد خرید</p>
          </div>
        </div>
        <div className="navbar__menu" onClick={toggleNavbarMenu}>
          <FiMenu />
        </div>
        {navbarMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 150 }} // Initial animation properties
            animate={{ opacity: 1, x: 0 }} // Animation properties when component mounts
            transition={{ duration: 0.75 }} // Animation duration
            className="navabr__menu_container"
          >
            <div className="HiX">
              <HiX onClick={toggleNavbarMenu} cursor="pointer" />
            </div>
            <div className="navbar__list_container">
              <uL className="navbar_list">
                <li>
                  <div className="cart">
                    <div>
                      <span>0</span>
                    </div>
                    <FiShoppingCart />
                    <p>سبد خرید</p>
                  </div>
                </li>
                <li>
                  <div className="login">
                    <p>ورود | ثبت نام</p>
                  </div>
                </li>
              </uL>
            </div>
          </motion.div>
        )}
      </div>
      
    </header>
  );
}

export default Header;
