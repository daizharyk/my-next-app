import data from "@/data/data.json";
import Image from "next/image";
import Button from "../Button";
import styles from "./MostPopularLiveAuctions.module.css";
import LikeButton from "../LikeButton/LikeButton";

const items = data["mostPopularLiveAuctions"];

const MostPopularLiveAuctions = () => {
  return (
    <section className={styles.section}>
      <p className="overline">Overline</p>
      <h4 className={styles.title}>Most popular live auctions</h4>

      <div className={styles.filterButtons}>
        <button className={styles.filterButton}>Architecture</button>
        <button className={styles.filterButton}>Photography</button>
        <button className={styles.filterButton}>Games</button>
        <button className={styles.filterButton}>Music</button>
      </div>

      <div className={styles.grid}>
        {items.map((item) => {
          return (
            <article className={styles.card} key={item.text}>
              <Image
                src={item.image}
                alt={item.text}
                width={212}
                height={355}
                className={styles.image}
              />
              <div className={styles.nftInfo}>
                <h3 className={styles.nftDescription}>{item.text}</h3>

                <div className={styles.timerPriceWrapper}>
                  <p className={styles.timer}>{item.timer}</p>
                  <p className="price small">{item.price}</p>
                </div>

                <div className={styles.bidsLikeWrapper}>
                  <p className={styles.bids}>{item.bidders}</p>
                  <LikeButton initialLikes={item.likes} />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className={styles.buttonWrapper}>
        <Button type="secondary" text={"Show me more"} />
      </div>
    </section>
  );
};

export default MostPopularLiveAuctions;
