import "./LinkBox.scss";
import { original, delivery, receipt, fragile } from "../assets";

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
    <div className="linkBox__container">
      <div className="logo__container">
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
      <div className="link__container">Box 2</div>
      <div className="description__container">Box 3</div>
    </div>
  );
}

export default LinkBox;
