import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import pudding from '../../public/puddingdog.png'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <h1>Welcome to my website! </h1>
        <Image src={pudding} />
      </div>
    </main>
  )
}
