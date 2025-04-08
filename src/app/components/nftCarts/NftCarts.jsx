import Button from "../Button";
import LikeButton from "../LikeButton/LikeButton";
import styles from "./NftCarts.module.css";
import Image from "next/image";
import auctionData from "@/data/data.json";

const items = auctionData["topNftDeals"];

const NftCarts = () => {
  return (
    <section className={styles.container}>
      <article className={styles.card}>
        <h2 className={styles.title}>Check out the hottest Sale offers</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <Image
              src="/images/nftImg1.png"
              alt="nftImg1"
              className={styles.image}
              width={500}
              height={300}
            />
            <p className={styles.description}>
              Fames habitasse risus ultricies tortor sit
            </p>
            <div className={styles.timerWrapper}>
              <p className={styles.timer}>22:59</p>
              <p className="price small">2.55 ETH</p>
            </div>
            <div className={styles.infoBottom}>
              <p className={styles.bids}>101 people are bidding</p>
              <LikeButton initialLikes="" />
            </div>
          </div>
          <div className={`${styles.content} ${styles.second}`}>
            <Image
              src="/images/nftImg2.png"
              alt="nftImg2"
              className={styles.image}
              width={500}
              height={300}
            />
            <p className={styles.description}>
              Fames habitasse risus ultricies tortor sit
            </p>
            <div className={styles.timerWrapper}>
              <p className={styles.timer}>22:59</p>
              <p className="price small">2.55 ETH</p>
            </div>
            <div className={styles.infoBottom}>
              <p className={styles.bids}>101 people are bidding</p>
              <LikeButton initialLikes="" />
            </div>
          </div>
        </div>
        <Button
          className={styles.button}
          type="secondary"
          text="Show me more"
          widthType="wide"
        />
        <button className={styles.navButton}></button>
      </article>
      <article className={`${styles.card} ${styles.midleCard}`}>
        <Image
          src="/images/nftImg3.png"
          alt="nftImg3"
          className={styles.imageMidle}
          width={500}
          height={300}
        />
        <h2 className={styles.midleDescription}>
          Get started creating & selling your NFTs
        </h2>
        <p className={styles.text}>
          Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi
          est sit.
        </p>
        <Button
          text="Get started"
          className={styles.button}
          type="primary"
          widthType="wide"
        />
      </article>
      <article className={styles.card}>
        <h2 className={styles.title}>Top NFT at a lower price</h2>
        <div className={styles.cartWrapper}>
          {items.map((item) => {
            return (
              <article className={styles.nftCard} key={item.text}>
                <Image
                  src={item.image}
                  alt="image"
                  className={styles.nftImg}
                  width={120}
                  height={120}
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
        <Button
          className={styles.button}
          type="secondary"
          text="Show me more"
          widthType="wide"
        />
      </article>
    </section>
  );
};

export default NftCarts;
