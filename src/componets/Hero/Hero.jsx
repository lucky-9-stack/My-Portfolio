import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utlis'

export const Hero = () => {
  return (
    < section className={styles.container}>
<div className={styles.content}>
    <h1 className={styles.title}>
        Hi, I'm Lucky Kumar Kundalwar
    </h1>
    <p className={styles.description}>
    Front-End Developer skilled in HTML, CSS, JavaScript, React.js, Node.js, and proficient in Java and Data Structures & Algorithms, with experience in creating dynamic and responsive websites.
 Solid foundation in cybersecurity, including network security, penetration testing, and incident response, allowing me to build secure and high-performance applications.

    </p>
    <a href = "mailto: luckykumarkundalwar18@gmail.com" className={styles.contactBtn}>Contact Me</a>
</div>
<img src={getImageUrl("hero/homie2.png")} alt = "Hero Image of me" className={styles.heroImg}/>
   <div className={styles.topBlur}/>
   <div className={styles.BottomBlur}/>
    </section>
    
  );
};

