import React from "react";

import Button from "../Button";
import styles from "./Info.module.css";

export default function Info() {
  return (
    <section className={styles.infoSection}>
      <h4 className={styles.infoSection__text}>
        REIIGNMAKA IS AN PRODUCER FROM NORTH CAROLINA BUT CURRENTLY
        RESIDES IN VIRGINIA, HE IS DEFINITELY UP NEXT, STAY TUNE AND BE ON THE
        LOOK OUT FOR HIM
      </h4>
      <Button isMail href="mailto:reiignmakamusic@gmail.com">Contact</Button>
    </section>
  );
}
