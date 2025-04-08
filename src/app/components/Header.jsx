import Button from "./Button";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Логотип */}
      <div className={styles.logo}>
        <Image src="/images/Logo.png" alt="My Logo" width={213} height={34} />
      </div>

      <nav className={styles.nav}>
        <Link href="#">Auctions</Link>
        <Link href="#">Roadmap</Link>
        <Link href="#">Discover</Link>
        <Link href="#">Community</Link>
      </nav>

      {/* Кнопки справа */}
      <div className={styles.actions}>
        <Button text="Contact us" type="secondary" />
        <Button text="My account" type="primary" />
      </div>
    </header>
  );
}
