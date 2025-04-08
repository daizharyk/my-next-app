import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.nfts}>
        <img
          src="/images/nft-images/Squares.png"
          width={1800}
          height={600}
          alt=""
        />
      </div>
      <div className={styles.container}>
        <p className={styles.smallText}>Non Fungible Tokens</p>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>
            A new NFT
            <Image
              className={styles.titleIcon}
              src="/images/Vector.png"
              alt="Title Icon"
              width={37}
              height={87}
            />
          </h1>
          <h2 className={styles.experience}>
            <Image
              className={styles.experienceIcon}
              src="/images/Frame.png" // Укажи правильный путь
              alt="Frame"
              width={62}
              height={62}
            />
            Experience
          </h2>
        </div>
        <p className={styles.subtitle}>Discover, collect and sell</p>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Items, collections and creators"
            className={styles.input}
          />
          <div className={styles.dropdown}>
            <span>Category</span>
            <Image
              className={styles.dropdownIcon}
              src="/images/ArrowDownIcon.png" // Укажи правильный путь
              alt="ArrowDownIcon"
              width={10}
              height={10}
            />
          </div>

          <Image
            className={styles.searchIcon}
            src="/images/SearchIcon.png" // Укажи правильный путь
            alt="SearchIcon"
            width={24}
            height={24}
          />
        </div>
        <div className={styles.imagesGrid}>
          <Image
            src="/images/logos/Adidas.png"
            alt="Adidas"
            width={85}
            height={45}
          />
          <Image
            src="/images/logos/NewHolland.png"
            alt="NewHolland"
            width={85}
            height={45}
          />
          <Image
            src="/images/logos/RitterSport.png"
            alt="RitterSport"
            width={85}
            height={45}
          />
          <Image
            src="/images/logos/Vector.png"
            alt="Vector"
            width={85}
            height={45}
          />
        </div>
      </div>
    </section>
  );
}
