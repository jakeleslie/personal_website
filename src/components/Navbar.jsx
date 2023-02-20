import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Resume</a>
            </li>
          <li>
            <Link href="https://github.com/jakeleslie">Github</Link>
          </li>
        </ul>
      )
}
