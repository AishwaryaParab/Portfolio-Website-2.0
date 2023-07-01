import React from 'react'
import styles from "./footer.module.css";
import Image from 'next/image';

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div className={styles.container}>
        <div>©{year} Aishwarya Parab. All rights reserved.</div>
        <div className={styles.socials}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Lama Dev Facebook" />
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Lama Dev Instagram" />
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Lama Dev Twitter" />
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Lama Dev YouTube" />
        </div>
    </div>
  )
}

export default Footer