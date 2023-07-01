import React from 'react'
import styles from "./page.module.css";
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose a Gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/Frontend" className={styles.item}>
          <span className={styles.category}>Frontend</span>
        </Link>

        <Link href="/portfolio/Backend" className={styles.item}>
          <span className={styles.category}>Backend</span>
        </Link>

        <Link href="/portfolio/Fullstack" className={styles.item}>
          <span className={styles.category}>Fullstack</span>
        </Link>

      </div>
    </div>
  )
}

export default Portfolio