import React from "react";
import "../css/ScrollingCards.css";

const Awards = () => {
  const cards = [
    { title: "Card 1", image: "img/service-1.jpg" },
    { title: "Card 2", image: "img/service-2.jpg" },
    { title: "Card 3", image: "img/service-3.jpg" },
    { title: "Card 4", image: "img/service-4.jpg" },
    { title: "Card 5", image: "img/service-5.jpg" },
    { title: "Card 6", image: "img/service-1.jpg" },
  ];

  return (
    <div className="container my-5">
      <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <h4 className="text-primary px-3 mb-2">Awards & Acheivments </h4>
        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
      </div>
      <div className="scrolling-container">
        <div className="scrolling-track">
          {/* Map over cards twice for seamless scrolling */}
          {cards.concat(cards).map((card, index) => (
            <div
              key={index}
              className={`card text-white text-center`}
              style={{
                width: "calc(100% / 4)", // Default to 4 cards visible
                height: "250px",
                marginRight: "16px",
                flexShrink: 0, // Prevent cards from shrinking
              }}
            >
              <img src={card.image} alt={card.title} className="card-img-top" />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
