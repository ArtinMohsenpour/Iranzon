import { Link } from "react-router-dom";
import "./TopProducts.scss";
import { headphone } from "../assets";
import { gpu1 } from "../assets";
import { gpu2 } from "../assets";
import { laptop } from "../assets";
import { headphone2 } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
//import { Pagination } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const images = [
  {
    img: gpu1,
    title: "بروز ترین کارت گرافیک ها",
    color: "black",
  },
  {
    img: gpu2,
    title: "Nvidia محصولات ",
    color: "#505747",
  },
  {
    img: laptop,
    title: "تخفیف های باور نکردنی",
    color: "#0e2a4f",
  },
  {
    img: headphone,
    title: "Bose محصولات",
    color: "#E5B493",
  },
  {
    img: headphone2,
    title: "محصولات اوریجینال همه برند ها",
    color: "black",
  },
  {
    img: headphone2,
    title: "محصولات اوریجینال همه برند ها",
    color: "black",
  },
  {
    img: headphone2,
    title: "محصولات اوریجینال همه برند ها",
    color: "black",
  },
  {
    img: headphone2,
    title: "محصولات اوریجینال همه برند ها",
    color: "black",
  },
  {
    img: headphone2,
    title: "محصولات اوریجینال همه برند ها",
    color: "black",
  },
];

//

function TopProducts() {
  return (
    <div className="top_best_container">
      <h2>Top Products</h2>
      <div className="top__products_container">
        <div className="img__container">
          <Swiper
          className="swiper__main"
            modules={[Pagination, Navigation]}
            loop={true}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            <>
              {images.map((img, index) => {
                return (
                  <SwiperSlide key={index} className="swiper__slide">
                    <div className="img__container_hero">
                      <img src={img.img} alt="img-topproducts" />
                      <Link to={"./products/1"} className="title__container">
                        <p>{img.title}</p>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </>
          </Swiper>
        </div>
      </div>
      <h2>Best Selling Products</h2>
      <div className="bestselling__products_container">
        <div className="img__container">
          <Swiper
            modules={[Pagination, Navigation]}
            loop={true}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            <>
              {images.map((img, index) => {
                return (
                  <SwiperSlide key={index} className="swiper__slide">
                    <div className="img__container_hero">
                      <img src={img.img} alt="img-banner" />
                      <Link to={"./products/1"} className="title__container">
                        <p>{img.title}</p>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
