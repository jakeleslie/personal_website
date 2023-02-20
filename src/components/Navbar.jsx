import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import pudding from '../../public/puddingdog.png'

export default function Navbar() {
    return (
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="https://github.com/jakeleslie">Github</Link>
          </li>
          <li>
          <Image 
        src={pudding}
        />
          </li>
        </ul>
      )
}
