import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from '../../utlis'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}> <img src = {getImageUrl("about/abouttt.jpg")}
         alt="Me sitting with my laptop" className={styles.aboutImage}/>
         <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                < img src = {getImageUrl("about/cursor.png")} alt= "cursor icon" className={styles.cursor1} />
        <div className={styles.aboutItemText}>
           
            <p>
             I'm a frontend developer proficient in building responsive and optimized sites.
            </p>
        </div>
        </li>
        <li className={styles.aboutItem}>
            < img src = {getImageUrl("about/cursor.png")} alt= "cursor icon" className={styles.cursor2}/> 
            <div className={styles.aboutItemText}>
            
            <p>
    I am skilled in implementing and managing cybersecurity solutions, focusing on network security, penetration testing, and incident response, ensuring systems are secure, reliable, and resilient against threats.
</p>
</div>
        </li>
        </ul>
         </div>
    </section>
  );
}; 
