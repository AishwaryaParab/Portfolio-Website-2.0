import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          className={styles.img}
         />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Web Wizard 🪄</h1>
          <h2 className={styles.imgDesc}>Building web wonders together</h2>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.desc}>I'm here to collaborate with you in building powerful online experiences From concept to creation, I leverage my expertise to turn your visions into reality. Let's embark on a journey of innovation, where we'll craft extraordinary web wonders that captivate and inspire. Together, we'll create digital marvels that leave a lasting impression. Get ready to build something remarkable!
            <br />
            <br />
            Join me on this exciting journey as we transform your vision into a pixel-perfect reality. Let's collaborate and revolutionize the web together!</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What I Do?</h1>
          <p className={styles.desc}>Leveraging cutting-edge technologies such as React.js, Next.js, and Node.js, I bring your web projects to life with seamless user experiences and top-notch performance. Here's a snapshot of what I offer: 
            <br />
            <br /> - Fast and responsive web applications
            <br />
            <br /> - Modern and sleek user interface design
            <br />
            <br /> - Seamless integration of APIs and third-party services
            <br />
            <br /> - Customized solutions tailored to your unique needs</p>
            <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About