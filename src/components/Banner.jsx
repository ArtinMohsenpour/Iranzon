import "./Banner.scss";
import { gpu1 } from "../assets";
import { gpu2 } from "../assets";
import { laptop } from "../assets";
import { headphone } from "../assets";
import { headphone2 } from "../assets";

import { Swiper, SwiperSlide } from "swiper/react";
//import { Pagination } from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";
//components
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
];

function Banner() {
  return (
    <div className="banner">
      <Swiper
        modules={[Pagination, Navigation]}
        loop={true}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="swiper"
      >
        <>
          {images.map((img, index) => {
            return (
              <SwiperSlide key={index} className="image__container">
                <div className="image__container">
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
  );
}

export default Banner;
