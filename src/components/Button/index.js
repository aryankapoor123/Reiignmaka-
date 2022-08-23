import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router-dom";

export default function Button({ children,href,isMail }) {

  function sendMail(e){
      window.location.href = href;
      e.preventDefault();
  }

  return (
    <Link to={isMail ? '#' : href} onClick={isMail && sendMail} className={styles.root}>
      {children}
    </Link>
  );
}
