
import Aside from "./Aside";
import AsideRight from "./AsideRight";
import "./Hero.scss";
import LinkBox from "./LinkBox";


function Hero() {
  // const [url, setUrl] = useState("");
  // const [data, setData] = useState(null);

  // const fetchData = async () => {
  //   const url =
  //     "https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-lookup-product?url=https%3A%2F%2Fwww.amazon.de%2F-%2Fen%2FVictoria-Secret-Pure-Seduction-Fragrance%2Fdp%2FB00397NO5O%2F%3F_encoding%3DUTF8%26pd_rd_w%3Dec2lA%26content-id%3Damzn1.sym.34ed1063-0ca6-4a75-80ae-96545fe261c4%253Aamzn1.symc.acc592a4-4352-4855-9385-357337847763%26pf_rd_p%3D34ed1063-0ca6-4a75-80ae-96545fe261c4%26pf_rd_r%3D0TRM0F1C1B06NSM2Y1KF%26pd_rd_wg%3DXWoEv%26pd_rd_r%3De8a07e8b-a264-44f9-b937-705bb7a47aba%26ref_%3Dpd_gw_ci_mcx_mr_hp_d";
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "ed0ad22644mshf387e496fc8d0f7p16fc3ajsnb52a5bdc5ba2",
  //       "X-RapidAPI-Host":
  //         "axesso-axesso-amazon-data-service-v1.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     const data = JSON.parse(result);
  //     setData(data);
  //     console.log(data.productTitle);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="hero">
      <Aside className="aside" />
      <LinkBox  className="linkbox" />
      <AsideRight className="asideright" />
    </div>
  );
}

export default Hero;
