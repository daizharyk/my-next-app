"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AuctionCarousel.module.css";
import auctionData from "@/data/data.json";
import LikeButton from "../LikeButton/LikeButton";

export default function AuctionCarousel() {
  const scrollRef = useRef(null);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(800);

  const items = auctionData["latestLiveAuctions"];

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(checkScrollPosition, 500);
  };

  const checkScrollPosition = () => {
    if (!scrollRef.current) return;

    const scrollLeft = scrollRef.current.scrollLeft;
    const scrollWidth = scrollRef.current.scrollWidth;
    const clientWidth = scrollRef.current.clientWidth;

    setIsAtStart(scrollLeft === 0);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
  };

  const handleButtonClick = (direction) => {
    scroll(direction);

    checkScrollPosition();
  };
  useEffect(() => {
    const updateScrollAmount = () => {
      const width = window.innerWidth;
      setScrollAmount(width >= 520 ? 300 : 800);
    };

    updateScrollAmount(); 
    window.addEventListener("resize", updateScrollAmount);

    return () => window.removeEventListener("resize", updateScrollAmount);
  }, []);

  
  useEffect(() => {
    checkScrollPosition();
  }, []);
  return (
    <section className={styles.container}>
      <h4 className={styles.title}>Latest live auctions</h4>
      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.navButton} ${isAtStart ? styles.hidden : ""} ${
            styles.left
          }`}
          onClick={() => handleButtonClick("left")}
        ></button>

        <div className={styles.carousel} ref={scrollRef}>
          {items.concat(items, items).map((item, index) => (
            <article className={styles.card} key={index}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.infoTop}>
                <h3 className={styles.description}>{item.text}</h3>
                <p className="price large">{item.price}</p>
              </div>

              <p className="timer">{item.timer}</p>
              <div className={styles.infoBottom}>
                <div className={styles.avatars}>
                  <img src="/images/users/01.png" alt="User 1" />
                  <img src="/images/users/02.png" alt="User 2" />
                  <img src="/images/users/03.png" alt="User 3" />
                  <img src="/images/users/04.png" alt="User 4" />
                </div>
                <p className={styles.bids}>{item.bidders}</p>
                <LikeButton
                  initialLikes={item.likes}
                  className={styles.likeButton}
                />
              </div>
            </article>
          ))}
        </div>

        <button
          className={`${styles.navButton} ${isAtEnd ? styles.hidden : ""} ${
            styles.right
          }`}
          onClick={() => handleButtonClick("right")}
        ></button>
      </div>
    </section>
  );
}
