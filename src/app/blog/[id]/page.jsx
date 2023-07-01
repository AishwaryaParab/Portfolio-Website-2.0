import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import {notFound} from 'next/navigation';

export async function generateMetadata({ params }) {
  const post = await getData(params.id);

  return {
    title: post.title,
    description: post.desc
  }
}

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    // throw new Error('Failed to fetch data')
    return notFound();
  }
 
  return res.json()
}

const BlogPage = async ({params}) => {
  const data = await getData(params.id);

  return (
    <div>
      <div className={styles.topContainer}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        
        <div className={styles.imgContainer}>
            <Image
              src={data.img}
              fill={true}
              className={styles.img}
            />
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.text}>
          {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPage