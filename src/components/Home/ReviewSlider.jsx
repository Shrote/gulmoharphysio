"use client";

import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./review-slider.module.css";

const reviews = [
  {
    id: 1,
    rating: 5,
    text: "I had a great experience at Gulmohar Physiotherapy while recovering from a knee injury. Dr. Rajeev is amazing. He really knows his work and explained everything in a way that made me feel confident and at ease. The staff was super friendly and supportive, always making sure I was comfortable and well taken care of.",
    // date: "3 weeks ago",
    author: {
      name: "Vishal Kumar",
      reviews: 8,
      photos: 4,
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJBV9yKJB8bbW1ZmOXX1PLmuRgCdNAVGsc7tvrlkiVWoFDrYLhF=w45-h45-p-rp-mo-br100",
    },
  },
  // {
  //   "id": 2,
  //   "rating": 5,
  //   "text": "I had an excellent experience at Gulmohar Physio—highly skilled and attentive physiotherapists who helped me recover quickly. The clinic is clean, welcoming, and well-equipped for all therapy needs.",
  //   "date": "3 weeks ago",
  //   "author": {
  //     "name": "Sbdb",
  //     "reviews": 1,
  //     "image": "https://lh3.googleusercontent.com/a/ACg8ocLk2-S_B7lL5c3UyzOMLTMiWXC2ydfWyUi8fROV4V4_0hO95Q=w45-h45-p-rp-mo-br100"
  //   }
  // },
  {
    id: 3,
    rating: 5,
    text: "Gulmohar Physio offers excellent, personalized care with professional therapists who ensure effective treatment. The clinic’s welcoming atmosphere and attention to detail make it a top choice for physiotherapy.",
    // date: "4 weeks ago",
    author: {
      name: "Alok Kumar Panday",
      reviews: 1,
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocKnLc79NIE3GTxPPF71peWD__7ls8Z1GPj7vieUvlOXe2YvHw=w45-h45-p-rp-mo-br100",
    },
  },
  {
    id: 4,
    rating: 5,
    text: "Best service provider in city. Environment is good",
    // date: "3 weeks ago",
    author: {
      name: "Debjit Majumdar",
      reviews: 1,
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJoOgHYXgIlh8X2KQlpc2spohcJPDmCgcPBqTIjE_o9r5Xigg=w45-h45-p-rp-mo-br100",
    },
  },
  {
    id: 5,
    rating: 5,
    text: "Best physiotherapy in this area",
    // date: "3 weeks ago",
    author: {
      name: "Shashikant Kumar",
      reviews: 20,
      photos: 2,
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocK9sD4_9q9BKQOWGtIvrbNBVCeLgix7umsZp35Ix8_s6JwaslI=w45-h45-p-rp-mo-ba3-br100",
    },
  },
  {
    id: 6,
    rating: 5,
    text: "Very good hospitality",
    // date: "3 weeks ago",
    author: {
      name: "Amarnath Dev",
      reviews: 18,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjXOCW4i9YiA8n0U3J_TvMnvZqEalpKtEY0jwlrpIpMYN9Wl5Ipk=w45-h45-p-rp-mo-ba2-br100",
    },
  },
  {
    id: 7,
    rating: 5,
    text: "कुछ समय पहले मेरे पैर में काफी दर्द था, और दवाई लेने के बाद भी आराम नहीं मिल रहा था। किसी ने गुलमोहर फिजियो हॉस्पिटल की सलाह दी, और मैं वहाँ गया। डॉक्टर बहुत ही धैर्यपूर्वक मेरी समस्या सुनी और एक सही ट्रीटमेंट प्लान बताया।",
    // date: "42 minutes ago",
    author: {
      name: "Anup Panday",
      reviews: 1,
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocKddndhhnfFEphnNOcLrsrxJixuLu6S9TRWLiUDEvv0Y8DvBg=w45-h45-p-rp-mo-br100",
    },
  },
  {
    id: 8,
    rating: 5,
    text: "My weary legs were in tears when I was trying to exit the clinic. My legs wanted to stay back with Dr. Rajeev but I had elsewhere to go- I wasn't surprised my legs chose Dr.Rajeev over me - I'm sure yours will too. Knee pain more like pain hai hi nhi(knee) - get it?",
    // date: "an hour ago",
    author: {
      name: "Arun Magesh",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjWOEYUIrjgQxu__9eqYxEv5vLku3Q2TgG9yl0Qb0uHY479DONs=w45-h45-p-rp-mo-br100",
    },
  },
  {
    id: 9,
    rating: 5,
    text: "Overall a very good experience, best physiotherapy doctors available here they treated you very well and the suggested exercise was very good .",
    // date: "12 hours ago",
    author: {
      name: "Shubham Kumar",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocLPrDgdRYPeRYC_M7Ll-x9sgczLxBiTC0Fdn1--ZHl773wUaA=w45-h45-p-rp-mo-br100",
    },
  },
  {
    id: 10,
    rating: 5,
    text: "Bhot hi acha hospital hai Ranchi me",
    // date: "12 hours ago",
    author: {
      name: "Ranjan Kumar",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocKVjTn0S-WNV6UxDW66oYDyEHt4y_dsqaHHKKFjkOL-BZ5sPQ=w45-h45-p-rp-mo-br100",
    },
  },
  {
    id: 11,
    rating: 5,
    text: "Best hospital in Ranchi, the experience was good in the physiotherapy department.when my relatives got back in pain the doctor suggested some exercise and it was good and fast recovery .",
    // date: "13 hours ago",
    author: {
      name: "Prep Aud",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJimSnFzEHE1D1-xu6KCQGZcpooGT5sRAVn3hItZ5WQsJOsgA=w45-h45-p-rp-mo-br100",
    },
  },
  {
    id: 12,
    rating: 5,
    text: "Best experience here , when my left hand was broken and the doctor was very good there and they suggested physiotherapy for the durability of the hand and the doctor was very kind there and the fees were minimum. I recommend the best physiotherapy doctor in Gulmohar hospital in Ranchi.",
    // date: "13 hours ago",
    author: {
      name: "Ranjan Kumar",
      reviews: 27,
      photos: 36,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVC_nHR1h_zLMfGxaK5X27bYbgezgEiYnLxM68LmhF4Htrtw24Z=w45-h45-p-rp-mo-ba3-br100",
    },
  },
  {
    id: 13,
    rating: 5,
    text: "Best physiotherapy Gulmohar hospital Ranchi",
    // date: "23 hours ago",
    author: {
      name: "Krishna Prasad Kushwaha",
      reviews: 2,
      photos: 13,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVf1jZeuDsT_e-zmSOnaB9s0FzIHGPXjjVJ8K2MAb7RBlCNUnI=w45-h45-p-rp-mo-br100",
    },
  },
  {
    id: 14,
    rating: 5,
    text: "It is the best physio’s department in Ranchi where can be treated like peace of mind",
    // date: "23 hours ago",
    author: {
      name: "Kamlesh Singh",
      photos: 2,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjXbTjcowy3GsSnl7tfOJhO033vcUK4FX8P7pn4pMWJoPg-SP6A=w45-h45-p-rp-mo-br100",
    },
  },
];

export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 2 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 2 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 2 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className={styles.reviewSection}>
      <div className={styles.backgroundDecoration} />
      <h2 className={styles.reviewHeading}>
        What People Think <span>About Us</span>
      </h2>

      <div
        className={styles.reviewSlider}
        style={{ transform: `translateX(-${currentIndex * (100 / 2)}%)` }}
      >
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewDate}>{review.date}</div>
            <p>Google Map Reviews</p>

            <div className={styles.reviewStars}>
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={index < review.rating ? styles.starFilled : ""}
                  size={20}
                />
              ))}
            </div>
            <p className={styles.reviewText}>{review.text}</p>
            <div className={styles.reviewProfile}>
              <img
                src={
                  review.author.image ||
                  "https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg"
                }
                alt={review.author.name}
                className={styles.profileImage}
              />
              <div className={styles.profileInfo}>
                <h4>{review.author.name}</h4>
                <p>{review.author.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className={`${styles.sliderNav} ${styles.prev}`}
        onClick={handlePrevious}
        aria-label="Previous review"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className={`${styles.sliderNav} ${styles.next}`}
        onClick={handleNext}
        aria-label="Next review"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
