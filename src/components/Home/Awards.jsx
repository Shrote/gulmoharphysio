import React from "react";
import "../css/ScrollingCards.css";

const Awards = () => {
  const cards = [
    // { title: "gulmohar awards Bimla harihar institute", image: "img/award-1.png" },
    {
      title: "gulmohar awards 55th The Indian Association Of Therapy",
      image: "img/award-2.png",
    },
    {
      title: "gulmohar awards Bimla harihar institute",
      image: "img/award-3.png",
    },
    {
      title: "gulmohar awards The Indian Association Of Therapy",
      image: "img/award-4.png",
    },
    {
      title: "gulmohar awards 55th The Indian Association Of Therapy",
      image: "img/award-5.png",
    },
    // { title: "Card 6", image: "img/service-1.png" },
  ];

  return (
    <div className="container my-5">
      <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <h4 className="text-primary px-3 mb-2">Awards & Acheivments </h4>
        <p className="mb-0">
          Our Head of Department's expertise and dedication to physiotherapy
          have earned prestigious awards, reflecting a commitment to excellence
          and patient care.
        </p>
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
              <img src={card.image} alt={card.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
