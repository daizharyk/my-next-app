import Image from "next/image";
import Button from "../Button";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Image
          src="/images/logo.png"
          width={213}
          height={34}
          alt="logo"
          className={styles.logo}
        />
        <div className={styles.supportLinks}>
          <a href="#" target="_blank">
            Support
          </a>
          <a href="#" target="_blank">
            Terms of Service
          </a>
          <a href="#" target="_blank">
            License
          </a>
        </div>
      </div>

      <div className={styles.wrapper}>
        <ul className={styles.footerList}>
          <li>
            <a href="/auctions" className={styles.footerLink}>
              Auctions
            </a>
          </li>
          <li>
            <a href="/roadmap" className={styles.footerLink}>
              Roadmap
            </a>
          </li>
          <li>
            <a href="/discover" className={styles.footerLink}>
              Discover
            </a>
          </li>
          <li>
            <a href="/community" className={styles.footerLink}>
              Community
            </a>
          </li>
        </ul>

        <Button
          widthType="short"
          className={styles.button}
          text={"My account"}
          type="primary"
        />
        <div className={styles.logosWrapper}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/logosSocial/logo1.png"
              width={20}
              height={20}
              alt="logo1"
              className={styles.logoIcon}
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/logosSocial/logo2.png"
              width={20}
              height={20}
              alt="logo2"
              className={styles.logoIcon}
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/logosSocial/logo3.png"
              width={20}
              height={20}
              alt="logo3"
              className={styles.logoIcon}
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/logosSocial/logo4.png"
              width={20}
              height={20}
              alt="logo4"
              className={styles.logoIcon}
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/logosSocial/logo5.png"
              width={20}
              height={20}
              alt="logo5"
              className={styles.logoIcon}
            />
          </a>
        </div>
      </div>

      <div className={styles.wrapper}>
        <p className={styles.newsletterText}>
          Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
          velit, sed egestas in. Id nam semper dolor tellus vulputate eget
          turpis.
        </p>
        <div className={styles.newsletterWrapper}>
          <input
            type="email"
            name="newsletter"
            id="newsletter"
            placeholder="Newsteller"
            className={styles.newsletterInput}
          />
          <button type="submit" className={styles.newsletterButton}>
            Sign in
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
