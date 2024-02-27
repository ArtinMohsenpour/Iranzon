import "./Header.scss";
import { logoNavbar } from "../assets";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiX } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [navbarMenuOpen, setNavbarMenuOpen] = useState(false);
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
        <div className="navbar__menu" onClick={() => setNavbarMenuOpen(true)}>
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
              <HiX
                onClick={() => setNavbarMenuOpen(!navbarMenuOpen)}
                cursor="pointer"
              />
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
      <div className="small__searchbar_container">
        <div className="searchbar__container_small">
          <input placeholder="...جستجو محصول" />
          <button>
            <FiSearch />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
