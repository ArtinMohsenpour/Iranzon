import "./HomePage.scss";
import Banner from "../../components/Banner";
import Hero from "../../components/Hero";

function HomePage() {
  return (
    <main className="main">
      <Banner />
      <Hero />
      <div>top products</div>
    </main>
  );
}

export default HomePage;
