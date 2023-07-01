import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png";
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Making magic happen on the Digital Frontier</h1>
        <p className={styles.desc}>Welcome to my portfolio website! I'm a passionate web developer dedicated to unleashing the true potential of digital experiences.</p>
        <Button url="/portfolio" text="Checkout Portfolio" />
      </div>

      <div className={styles.item}>
        <Image src={Hero} className={styles.img} />
      </div>
    </div>
  )
}
