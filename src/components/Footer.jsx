import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaEnvelope,
  FaWhatsapp,
  FaCopyright,
} from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Footer() {
  return (
    <div className="footer">
      <div className="back__to_top">
        <Link to="/">
          <button onClick={scrollToTop}>بازگشت به بالا</button>
        </Link>
      </div>
      <div className="terms__section">
        <div className="contact__terms">
          <h2>ارتباط با ما</h2>
          <p>
            ایمیل <FaEnvelope />
          </p>
          <p>
            واتساپ <FaWhatsapp />
          </p>
          <p>
            تلگرام <FaTelegram />
          </p>
          <p>
            یوتیوب <FaYoutube />
          </p>
        </div>
        <div className="work__terms">
          <h2>همکاری با ما</h2>
          <Link to="/work-with-us">
            <p>چه کسانی میتوانند اپلای کنند؟</p>
          </Link>
          <Link to="/work-with-us">
            <p>نحوه همکاری</p>
          </Link>
          <Link to="/work-with-us">
            <p>مدت همکاری</p>
          </Link>
          <Link to="/work-with-us">
            <p>مزایای همکاری با ما</p>
          </Link>
        </div>
        <div className="terms_conditions">
          <h2>قوانین و شرایط </h2>
          <Link to="/terms">
            <p>قوانین سفارش از سایت</p>
          </Link>
          <Link to="/terms">
            <p>شرایط برگشت کالا</p>
          </Link>
          <Link to="/terms">
            <p>بیمه کردن سفارش</p>
          </Link>
        </div>
      </div>
      <div className="copyright__section">
        <hr className="divider" />
        <p>
          <FaCopyright /> 2024 IRANZON, All rights reserved.
        </p>
        <p>CEO and Founder: Abolfazl Mohsenpour</p>
        <p>For inquiries, please contact: mohsenpour.artin@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
