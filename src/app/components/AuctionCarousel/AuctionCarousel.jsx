"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AuctionCarousel.module.css";
import auctionData from "@/data/data.json";
import LikeButton from "../LikeButton/LikeButton";

export default function AuctionCarousel() {
  const scrollRef = useRef(null);
  const [startTouch, setStartTouch] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scrollAmount = 800;

  const handleTouchStart = (e) => {
    setStartTouch(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const touchMove = e.touches[0].clientX;
    const diff = startTouch - touchMove;

    if (Math.abs(diff) > 30) {
      scroll(diff > 0 ? "right" : "left");
      setStartTouch(touchMove);
    }
  };

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

        <div
          className={styles.carousel}
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
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
                <LikeButton initialLikes={item.likes} />
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
