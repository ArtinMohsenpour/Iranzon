import "./LinkBox.scss";
import { original, delivery, receipt, fragile } from "../assets";
import { FiSearch } from "react-icons/fi";
import { useRef, useState } from "react";

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
    title: "تحویل سروقت",
  },
];

function LinkBox() {
  const form = useRef();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [failMessage, setFailMessage] = useState("No Data!");

  const fetchData = async (productUrl) => {
    setIsLoading(true);
    setSuccessMessage("");
    const encodedUrl = encodeURIComponent(productUrl);
    const apiUrl = `https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-lookup-product?url=${encodedUrl}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ed0ad22644mshf387e496fc8d0f7p16fc3ajsnb52a5bdc5ba2",
        "X-RapidAPI-Host":
          "axesso-axesso-amazon-data-service-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(apiUrl, options);
      if (response.status === 429) {
        console.error("Too Many Requests: You are being rate-limited.");
        setIsLoading(false);
        setFailMessage("Too Many Requests: You are being rate-limited.");
        return;
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (result.responseStatus === "PRODUCT_FOUND_RESPONSE") {
        setData(result);
        setSuccessMessage("Product found successfully");
      } else {
        setFailMessage("Product not found!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setFailMessage("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  const formData = (e) => {
    e.preventDefault();
    const productUrl = form.current.url.value;
    if (productUrl) {
      fetchData(productUrl);
    }
  };

  return (
    <div className="linkBox__container_hero">
      <div className="logo__container_hero">
        {images.map((img, index) => (
          <div key={index} className="image__container">
            <img src={img.img} alt="logo images" />
            <div>
              <p>{img.title}</p>
            </div>
          </div>
        ))}
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
          <button type="submit">
            <FiSearch />
          </button>
        </form>
      </div>
      {isLoading ? (
        <div className="loading_container">
          <div className="loading_spinner"></div>
          <div className="loading_text">Loading...</div>
        </div>
      ) : null}
      {successMessage && (
        <div className="success_message">{successMessage}</div>
      )}
      {data ? (
        <div className="product__container">
          <div className="main_image__container">
            <img
              src={data.mainImage?.imageUrl}
              className="main_product__image"
              alt={data.productTitle}
            />
            <div className="product__title">
              <h1>Title:</h1>
              <h2>{data.productTitle}</h2>
            </div>
          </div>
          <div className="product__descriptions">
            <p>
              <strong>Manufacturer:</strong> {data.manufacturer}
            </p>
            <p>
              <strong>Price:</strong> ${data.price}
            </p>
            <p>
              <strong>Rating:</strong> {data.productRating}
            </p>
            <p>
              <strong>Reviews:</strong> {data.countReview}
            </p>
            <p>
              <strong>Description:</strong> {data.productDescription}
            </p>
            <h3>Features:</h3>
            <ul>
              {data.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3>Categories:</h3>
            <ul>
              {data.categories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          </div>

          {successMessage && (
            <div className="add-to-basket__button">
              <button>Add to Basket</button>
            </div>
          )}
        </div>
      ) : (
        failMessage && (
          <div className="results__message">
            <p>{failMessage}</p>
          </div>
        )
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
