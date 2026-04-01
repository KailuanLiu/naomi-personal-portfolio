import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={`${style.navbar} font-mono`}>
      <div className={style.left}>
        <Link href="/">HOME</Link>
        <a 
          href="https://github.com/KailuanLiu"
          target="_blank"
          rel="noopener noreferrer"
        > GITHUB </a>
        <a 
          href="https://www.linkedin.com/in/kailuanliu/"
          target="_blank"
          rel="noopener noreferrer"
        > LINKEDIN </a>
      </div>

      <div className={style.right}>
        <button className={style.post}>POST</button>
      </div>
    </header>
  );
}