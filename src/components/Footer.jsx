import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaYoutube, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

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
        <p>ایمیل</p>
        <p>واتساپ</p>
        <p>تلگرام</p>
        <p>dwdw</p>
        </div>
        <div className="work__terms">Make money with us</div>
        <div className="terms_conditions">Terms and conditions</div>
      </div>
      <div className="copyright__section">
        All rights reserved: Abolfazl Mohsenpour
      </div>
    </div>
  );
}

export default Footer;
