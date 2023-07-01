import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/Button/Button';

export const metadata = {
  title: "Contact Me"
}

const Contact = () => {
  return (
    <div>
      <h1 className={styles.title}>Let's Keep in Touch</h1>

      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            src="/contact.png"
            fill={true}
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='Name' className={styles.input} />
          <input type="text" placeholder='Email' className={styles.input} />
          <textarea className={styles.textArea} cols="30" rows="10" placeholder="Message"></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact