import "./ProductPage.scss";
import Banner from "../../components/Banner";
import Hero from "../../components/Hero";
import TopProducts from "../../components/TopProducts";

function ProductPage() {
  return (
    <main className="main">
      <Banner />
      <Hero />
      <TopProducts />
    </main>
  );
}

export default ProductPage;
