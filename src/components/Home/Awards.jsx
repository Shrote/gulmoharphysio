import React from "react";
import "../css/ScrollingCards.css";

const Awards = () => {
  const cards = [
    { title: "Card 1", image: "img/award-1.png" },
    { title: "Card 2", image: "img/award-2.png" },
    { title: "Card 3", image: "img/award-3.png" },
    { title: "Card 4", image: "img/award-4.png" },
    { title: "Card 5", image: "img/award-5.png" },
    // { title: "Card 6", image: "img/service-1.png" },
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
                height: "auto",
                marginRight: "16px",
                flexShrink: 0, // Prevent cards from shrinking
              }}
            >
              <img src={card.image} alt={card.title}  />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
