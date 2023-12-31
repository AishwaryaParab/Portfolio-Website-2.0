"use client"

import React from 'react'
import { links } from '@/utils/data'
import Link from 'next/link'
import styles from "./navbar.module.css";
import DarkModeToggle from '../darkMode/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Aishwarya Parab</Link>
        <div className={styles.links}>
            <DarkModeToggle />
            {links.map((link) => {
                return <Link className={styles.link} key={link.id} href={link.url}>{link.title}</Link>
            })}

            {session.status === "authenticated" && <button className={styles.logout} onClick={signOut}>Logout</button>}
        </div>
    </div>
  )
}

export default Navbar