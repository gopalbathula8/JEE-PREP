import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.first}>
        <div className={styles.title}>
          <h2>JEE-PREP</h2>
          <p>It's never late to start...</p>
          <hr />
        </div>
        <div className={styles.info}>
          <a href="https://www.instagram.com/gopal_bathula/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/gopal.bathula.357/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
      <div className={styles.seond}>
        <div className={styles.copy}>
          <h6>Copyright © 2024 JEE-PREP | All rights reserved</h6>
          <hr />
        </div>

        <div className={styles.about}>
          <a className={styles.k} href="#about">
            About
          </a>
          <a className={styles.k} href="#contact">
            Contact
          </a>
          <a className={styles.k} href="#terms">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
