import React from 'react'
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utlis';

export const Contact = () => {
  return <footer id = "contact" className={styles.container}>
    <div className={styles.text}><h2>Contact</h2></div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/email.png")}
             alt="Email icon"/>
            < a href="mailto:;luckykumarkundalwar18@gmail.com">
                luckykumarkundalwar18@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedin.png")}
             alt="Email icon"/>
            < a href="https://www.linkedin.com/in/luckykumarkundalwar">
                linkedin.com/luckykumarkundalwar</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/github.png")}
             alt="Email icon"/>
            < a href="https://github.com/lucky-9-stack">
                github.com/luckykumarkundalwar</a>
        </li>
    </ul>
  </footer>;
};
