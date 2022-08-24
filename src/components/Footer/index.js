import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__widget}>
        <h4 className={styles.footer__heading}>About Reiignmaka</h4>
        <p>
        Reiignmaka is an producer from north carolina but currently
        resides in virginia, he is definitely up next, stay tune and be on the
        look out for him.
        </p>
      </span>
      <span
        className={styles.footer__widget}
        style={{ justifyContent: "center" }}
      >
        <h4 className={styles.footer__heading}>
          Follow and listen to Reiignmaka
        </h4>
        <div className={styles.iconContainer}>
          <a href="https://instagram.com/reiignmaka?igshid=YmMyMTA2M2Y=">
          <i class="bi bi-instagram"></i>
          </a>
         
          <a href="https://open.spotify.com/album/1YxJx62bN0ZHtnzLqMuti4">
          <i class="bi bi-spotify"></i>
          </a>

          <a href="https://youtube.com/channel/UC9n28DAGDq2WIlSU7t0CIew">
          <i class="bi bi-youtube"></i>
          </a>
          
          <a href="https://music.apple.com/us/album/reiign-supreme/1596035243">
          <i class="bi bi-apple"></i>
          </a>
        
        </div>
      </span>
      <span className={styles.footer__widget}>
        <h4 className={styles.footer__heading}>
          Keep in touch with Reiignmaka
        </h4>
        <p>Address - (studio)</p>
        <p>3201 Washington Ave #413 Newport News VA 23607</p>
      </span>
      <span style={{ marginTop: "5%",textAlign:'center' }}>
        Copyright © reiignmaka.com - Design by <a style={{color:'white'}} href="mailto:avikapoor7777@gmail.com">Avi Kapoor</a>
      </span>
    </footer>
  );
}
