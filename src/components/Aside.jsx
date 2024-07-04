import React, { useEffect, useState } from "react";
import "./Aside.scss";

function Aside() {
  const [deals, setDeals] = useState([]);
  const [randomDeals, setRandomDeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/v2/amazon-search-deals?domainCode=com&page=1",
          {
            headers: {
              "x-rapidapi-key":
                "ed0ad22644mshf387e496fc8d0f7p16fc3ajsnb52a5bdc5ba2",
              "x-rapidapi-host":
                "axesso-axesso-amazon-data-service-v1.p.rapidapi.com",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data && data.deals && Array.isArray(data.deals)) {
          setDeals(data.deals);
          console.log(data.deals);
          selectRandomDeals(data.deals); // Select 3 random deals initially
        } else {
          throw new Error("Data structure not as expected");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        // Handle error as needed
      }
    };

    fetchData();
  }, []);

  const selectRandomDeals = (allDeals) => {
    const randomIndexes = [];
    while (randomIndexes.length < 3) {
      const randomIndex = Math.floor(Math.random() * allDeals.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const selectedDeals = randomIndexes.map((index) => allDeals[index]);
    setRandomDeals(selectedDeals);
  };

  return (
    <div className="aside_container">
      <div className="aside__title">پیشنهاد های ویژه</div>
      <div>
        {randomDeals.map((deal, index) => (
          <div key={index} className="product__container">
            <div className="main_image__container">
              {deal.imgUrls && deal.imgUrls.length > 0 && (
                <img
                  src={deal.imgUrls[0]}
                  className="main_product__image"
                  alt={deal.title}
                />
              )}
            </div>
            <div className="product__details">
              <h2 className="product__title">{deal.title}</h2>
              {deal.discountAmount && (
                <div className="product__discount">
                  -{deal.savingPercentage}%
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aside;
