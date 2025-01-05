import Hero from '@/components/hero'
import Features from '@/components/features'
import Events from '@/components/events'
import About from '@/components/about'
import LiveCodingChallenge from '@/components/LiveCodingChallenge'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Events />
      <LiveCodingChallenge />
    </>
  )
}

