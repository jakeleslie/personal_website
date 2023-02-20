import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Page() {
  return (
    <main>
      <div>
        <Navbar />
        <h1>About</h1>
      </div>
    </main>
  )
}
