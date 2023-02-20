import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <h1>Jake's Website</h1>
        
      </div>
    </main>
  )
}
