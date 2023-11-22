import Aboutus from '@/components/Aboutus'
import Box from '@/components/Box'
import Carousal from '@/components/Carousal'
import Header from '@/components/Header'
import Join from '@/components/Join'
import ProvideSection from '@/components/ProvideSection'
import Queries from '@/components/Queries'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen w-full">
        <Header/>
        <Carousal/>
        {/* <Box/> */}
        <Aboutus/>
        <ProvideSection/>
        <Join/>
        <Queries/>
    </main>
  )
}
