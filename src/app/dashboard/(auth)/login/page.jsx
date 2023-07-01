"use client"

import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const handleSubmit = async (e) => {
  e.preventDefault();

  const email = e.target[0].value;
  const password = e.target[1].value;

  signIn("credentials", { email, password })
}

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if(session.status === "loading") {
    return <p>Loading...</p>
  }

  if(session.status === "authenticated") {
    router?.push("/dashboard")
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter your email' className={styles.input} required />
        <input type="password" placeholder='Enter your password' className={styles.input} required />
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={() => signIn("google")} className={styles.button + " " + styles.google}>
        Login with Google
      </button>

      <span className={styles.or}>- OR -</span>

      <Link className={styles.link} href="/dashboard/register">
        Create new account
      </Link>
    </div>
  )
}

export default Login