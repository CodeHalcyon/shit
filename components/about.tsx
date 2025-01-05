'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }
  }, [])

  return (
    <section className="py-20 bg-secondary/30">
      <div ref={aboutRef} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About CodeOholics</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            We are a vibrant community of passionate programmers, developers, and tech enthusiasts dedicated to fostering a collaborative environment where members can learn, grow, and push the boundaries of what's possible in coding.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="CodeOholics Community"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="mb-6 text-muted-foreground">
              To provide a platform for knowledge sharing, skill development, and networking among like-minded individuals who share a love for coding and technology.
            </p>
            <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>🚀 Engaging coding workshops and hackathons</li>
              <li>🧑‍🏫 Mentorship programs for aspiring developers</li>
              <li>🤝 Networking opportunities with industry professionals</li>
              <li>📚 Access to cutting-edge resources and tools</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

