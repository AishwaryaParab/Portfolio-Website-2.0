"use client"

import React, { useEffect } from 'react'
import styles from "./page.module.css";
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const session = useSession();
  console.log(session);

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name
        })
      })

      mutate()
      e.target.reset();
    } catch(err) {
      console.log(err);
    }
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method:"DELETE"
      })
      mutate()
    } catch(err) {
      console.log(err)
    }
  }

  if(session.status === "loading") {
    return <p>Loading...</p>
  } 
  
  if(session.status === "unauthenticated") {
    router?.push("/dashboard/login")
  }

  // makes the fetch call and returns the response

  if(session.status === "authenticated") {
    return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {isLoading ? "Loading..." :
          ((data.length === 0) ? <div style={{fontWeight: "bold", fontSize: "35px", color: "#53c28b"}}><span>No Post yet...</span></div> : (data?.map(post => (
            <div className={styles.post} key={post._id}>
              <div className={styles.imgContainer}><Image className={styles.img} src={post.img} alt="" width={200} height={100} /></div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span className={styles.delete} onClick={() =>{handleDelete(post._id)}}>X</span>
            </div>
          ))))
        }
      </div>  

      <form className={styles.new} onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input type="text" placeholder="Title" className={styles.input} />
        <input type="text" placeholder="Description" className={styles.input} />
        <input type="text" placeholder="Image" className={styles.input} />
        <textarea placeholder="Content" className={styles.textArea} cols="30" rows="10"></textarea>
        <button className={styles.button}>Send</button>
      </form>
    </div>
    )
  }
}

export default Dashboard