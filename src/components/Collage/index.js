import React from "react";
import Button from "../Button";
import styles from "./Collage.module.css";

export default function Collage() {
  return (
    <section className={styles.collage}>
      <div className={styles.collage__btn} style={{ marginLeft: "55%" }}>
        <Button href="/music">Music</Button>
      </div>
      <div className={styles.collage__btn}>
        <Button href="/video">Video</Button>
      </div>
      <div className={styles.collage__btn} style={{ marginLeft: "50%" }}>
        <Button  href="/">Shop</Button>
      </div>
      <div className={styles.collage__btn} style={{ marginLeft: "5%" }}>
        <Button isMail  href="mailto:reiignmakamusic@gmail.com">Contact</Button>
      </div>
    </section>
  );
}
