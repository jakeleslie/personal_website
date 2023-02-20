import React from 'react'
import Link from 'next/link'
import styles from '../components/Navbar.css'
import resume from '../../public/Resume.pdf'

export default function Navbar() {
  return (
    // <ul>
    //   <li>
    //     <a href="/">Home</a>
    //   </li>
    //   <li>
    //     <a href="/about">About</a>
    //   </li>
    //   <li>
    //     <Link
    //       href="/Resume.pdf"
    //       alt="alt text"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >Resume</Link>


    //   </li>
    //   <li>
    //     <Link href="https://github.com/jakeleslie">Github</Link>
    //   </li>
    //   <li>
    //     <a href="/contact">Contact</a>
    //   </li>
    //   {/* <li>
    //         <a href="#">Photos</a>
    //       </li> */}
    // </ul>
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/Resume.pdf'>Resume</Link>
      <Link href='https://github.com/jakeleslie'>Github</Link>
      <Link href='/contact'>Contact</Link>
    </nav>
  )
}
