import "./LinkBox.scss";
import { original, delivery, receipt, fragile } from "../assets";
import { FiMenu, FiSearch } from "react-icons/fi";
import { Ref, useRef } from "react";
import { useEffect, useState } from "react";

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
  const form = useRef();
  const [url, setUrl] = useState(
    "https://www.amazon.com/SAMSUNG-Smartphone-Unlocked-Android-Titanium/dp/B0CMDM65JH?ref_=Oct_DLandingS_D_92ae5971_0"
  );
  const [data, setData] = useState(null);

  /////////////////////////////////////////////////////////////////////////
  const fetchData = async () => {
    const url =
      "https://www.amazon.com/SAMSUNG-Smartphone-Unlocked-Android-Titanium/dp/B0CMDM65JH?ref_=Oct_DLandingS_D_92ae5971_0&th=1";

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ed0ad22644mshf387e496fc8d0f7p16fc3ajsnb52a5bdc5ba2",
        "X-RapidAPI-Host":
          "axesso-axesso-amazon-data-service-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const data = JSON.parse(result);
      setData(data);
      console.log(data.productTitle);
    } catch (error) {
      console.error(error);
    }
  };

  ////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    fetchData();
  }, [url]);

  //
  const formData = (e) => {
    e.preventDefault();
    const url = form.current.url.value;
    // console.log(url);
    setUrl(url);
  };

  //
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
        <form ref={form} onSubmit={formData} className="linkbox__searchform">
          <input
            type="text"
            name="url"
            className="search_input"
            placeholder="Product URL link..."
          />
          <button>
            <FiSearch />
          </button>
        </form>
      </div>
      {data && (
        <div>
          <h2>{data.productTitle}</h2>
        </div>
      )}
      <div className="description__container">
        <div>
          <h2>قبل از ثبت خرید نکات زیر را مطالعه بفرمایید:</h2>
          <div>
            <p>
              1. امکان پس فرستادن کالا فقط در صورت معیوب بودن کالا یا آسیب دیدگی
              کالا امکان پذیر میباشد
            </p>
            <p>
              2. در صورت ارجاع کالا فقط 70% از قیمت اصلی کالا بازگشت داده میشود
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
