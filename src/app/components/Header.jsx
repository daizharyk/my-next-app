"use client";
import { useState } from "react";
import Button from "./Button";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.logo}>
          <Image src="/images/Logo.png" alt="My Logo" width={213} height={34} />
        </div>

        <div className={styles.actions}>
          <Button text="Contact us" type="secondary" />
          <Button text="My account" type="primary" />
        </div>
        <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          <span
            className={`${styles.bar} ${menuOpen ? styles.bar1 : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${menuOpen ? styles.bar2 : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${menuOpen ? styles.bar3 : ""}`}
          ></span>
        </div>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <Link href="#">Auctions</Link>
        <Link href="#">Roadmap</Link>
        <Link href="#">Discover</Link>
        <Link href="#">Community</Link>
        <div className={styles.actionsNav}>
          <Button text="Contact us" type="secondary" />
          <Button text="My account" type="primary" />
        </div>
      </nav>
    </header>
  );
}
