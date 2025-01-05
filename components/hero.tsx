'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        }
      )
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4 z-10">
        <MotionDiv 
          ref={heroRef} 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 ref={headlineRef} className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Unleash Your Coding Potential with CodeOholics
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
            Dive into a world of innovation, collaboration, and cutting-edge technology
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link href="https://linktr.ee/CodeoholicsCommunity" target="_blank" rel="noopener noreferrer">
              Join Our Network
            </Link>
          </Button>
        </MotionDiv>
      </div>
    </section>
  )
}

