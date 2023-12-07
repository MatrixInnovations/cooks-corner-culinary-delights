import Image from 'next/image'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Menu from '@/components/Menu'

export default function Home() {
  return (
    <main>
      <Hero />
      <Menu />
    </main>
  )
}
