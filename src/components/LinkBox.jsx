import "./LinkBox.scss";
import { original, delivery, receipt, fragile } from "../assets";
import { FiMenu, FiSearch } from "react-icons/fi";

const images = [
  {
    img: original,
    title: "ضمانت اصالت کالا",
  },
  {
    img: receipt,
    title: "فاکتور رسمی آمازون",
  },
  {
    img: fragile,
    title: "ضمانت سلامت کالا",
  },
  {
    img: delivery,
    title: "تحویل بموقع",
  },
];

function LinkBox() {
  return (
    <div className="linkBox__container_hero">
      <div className="logo__container_hero">
        {images.map((img, index) => {
          return (
            <div key={index} className="image__container">
              <img src={img.img} alt="logo images" />
              <div>
                <p>{img.title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="link__container">
        <div>
          <p>لینک محصول را در باکس پایین بارگزاری کنید:</p>
        </div>
        <form className="linkbox__searchform">
          <input
            type="text"
            className="search_input"
            placeholder="Product URL link..."
          />
          <button>
            <FiSearch />
          </button>
        </form>
      </div>
      <div className="description__container">
        <div>
          <h2>قبل از ثبت خرید نکات زیر را مطالعه بفرمایید:</h2>
          <div>
            <p>
             1. امکان پس فرستادن کالا فقط در صورت معیوب بودن کالا یا آسیب دیدگی
              کالا امکان پذیر میباشد
            </p>
            <p>
          2.  در صورت ارجاع کالا فقط 70% از قیمت اصلی کالا بازگشت داده میشود
            </p>
            <p> 3.متوسط زمان ارسال و تحویل کالا بین 15 تا 30 روز میباشد</p>
            <p>
             4. به ازای هر یک روز تاخیر مبلغ 50 هزار تومان به حساب کاربری شما
              واریز خواهد شد
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkBox;
