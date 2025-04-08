"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./LikeButton.module.css";

export default function LikeButton({ initialLikes = 0 }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className={styles.wrapper} onClick={toggleLike}>
      <Image
        src={
          liked
            ? "/images/LatestLiveAuctions/HeartRed.png"
            : "/images/LatestLiveAuctions/heart-default.png"
        }
        alt="Like"
        width={20}
        height={20}
        className={styles.icon}
      />
      <span className={styles.count}>{likes}</span>
    </div>
  );
}
