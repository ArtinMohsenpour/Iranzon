import "./AsideRight.scss";

function AsideRight({ className }) {
  return (
    <div className={`${className} asideRight_container`}>
      <p>Advertisments</p>
      <div className="ad__container"></div>
    </div>
  );
}

export default AsideRight;
