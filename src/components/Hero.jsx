import { Link } from "react-router-dom";
import Aside from "./Aside";
import AsideRight from "./AsideRight";
import "./Hero.scss";
import LinkBox from "./LinkBox";

function Hero() {
  return (
    <div className="hero">
      <Aside />
      <LinkBox />
      <AsideRight />
    </div>
  );
}

export default Hero;
