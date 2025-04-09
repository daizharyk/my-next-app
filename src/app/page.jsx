import Image from "next/image";
import AuctionCarousel from "./components/AuctionCarousel/AuctionCarousel";
import Button from "./components/Button";
import MostPopularLiveAuctions from "./components/MostPopularLiveAuctions/MostPopularLiveAuctions";
import HeroSection from "./components/HeroSection/HeroSection";
import NftCarts from "./components/nftCarts/NftCarts.jsx";
import styles from "./HomePage.module.css";
import Counter from "./components/counter/Counter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AuctionCarousel />
      <section className={styles.infoSection}>
        <article className={styles.infoArticle}>
          <p className={styles.text}>overline</p>
          <h2 className={styles.title}>
            Sapien ipsum scelerisque convallis fusce
          </h2>
          <p className={styles.description}>
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          <div className={styles.buttonContainer}>
            <Button text="Get started" type="primary" />
            <Button text="Learn more" type="secondary" />
          </div>
        </article>
        <article className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src="/images/image.png"
            alt="image1"
            width={386}
            height={386}
          />
          <Image
            className={styles.image2}
            src="/images/image2.png"
            alt="image2"
            width={430}
            height={430}
          />
        </article>
      </section>
      <NftCarts />
      <section className={styles.additionalSection}>
        <article className={styles.doubleImageArticle}>
          <Image
            className={styles.imageEmoji}
            src="/images/emoji.png"
            alt="emoji"
            width={336}
            height={336}
          />
          <Image
            className={styles.imagePlane}
            src="/images/plane.png"
            alt="plane"
            width={430}
            height={370}
          />
        </article>

        <article className={styles.featureArticle}>
          <div className={styles.wrapper}>
            <p className="overline">Overline</p>
            <h2 className={styles.featureTitle}>
              Habitant tristique aliquam in vel scelerisque
            </h2>
            <p className={styles.featureDescription}>
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </p>
          </div>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <Image
                src="/images/drawing.png"
                alt="drawing"
                width={32}
                height={32}
                className={styles.featureIcon}
              />
              <div>
                <h4 className={styles.featureHeading}>Sollicitudin sapien</h4>
                <p className={styles.featureText}>Cursus fermentum</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <Image
                src="/images/pulvinar-metus.png"
                alt="pulvinar-metus"
                width={32}
                height={32}
                className={styles.featureIcon}
              />
              <div>
                <h4 className={styles.featureHeading}>Pulvinar metus</h4>
                <p className={styles.featureText}>Nunc sed</p>
              </div>
            </div>
          </div>

          <div className={styles.featureButtons}>
            <Button text="Get started" type="primary" />
            <Button text="Learn more" type="secondary" />
          </div>
        </article>
      </section>
      <hr />
      <MostPopularLiveAuctions />
      <Counter />
      <section className={styles.featureSection}>
        <article className={styles.wrapper}>
          <p className={`${styles.overline} overline`}>Overline</p>
          <h3 className={styles.title}>
            Cursus vitae sollicitudin donec nascetur. Join now
          </h3>
          <p className={styles.featureDescription}>
            Donec volutpat bibendum justo, odio aenean congue est porttitor ut.
            Mauris vestibulum eros libero amet tincidunt.
          </p>
          <div className={styles.featureButtons}>
            <Button text="Get started" type="primary" />
            <Button text="Learn more" type="secondary" />
          </div>
        </article>
        <article className={styles.imageWrapper}>
          <Image
            src="/images/Users.png"
            alt="Users illustration"
            width={500}
            height={400}
            className={styles.image}
          />
        </article>
      </section>
    </>
  );
}
