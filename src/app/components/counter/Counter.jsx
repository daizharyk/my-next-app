"use client";

import Image from "next/image";
import styles from "./Counter.module.css";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: "/images/user.png",
    alt: "User Icon",
    value: 300000,
    label: "User Active",
  },
  {
    icon: "/images/Group.png",
    alt: "Group Icon",
    value: 52500,
    label: "Artworks",
  },
  {
    icon: "/images/ArtistsIcon.png",
    alt: "Artists Icon",
    value: 17500,
    label: "Artists",
  },
  {
    icon: "/images/WalletIcon.png",
    alt: "Wallet Icon",
    value: 35.58,
    label: "ETH Spent",
    decimals: 2,
  },
];

const Counter = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  return (
    <section className={styles.section} ref={ref}>
      {stats.map((item, index) => (
        <motion.div
          className={styles.counterItem}
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2}}
        >
          <Image
            src={item.icon}
            alt={item.alt}
            width={32}
            height={32}
            className={styles.icon}
          />
          <p className={styles.number}>
            {startCount && (
              <CountUp
                end={item.value}
                duration={1}
                separator=","
                decimals={item.decimals || 0}
              />
            )}
          </p>
          <p className={styles.label}>{item.label}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default Counter;
