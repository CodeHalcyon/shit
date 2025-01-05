'use client'

import { useRef, useEffect } from 'react'
import { Code, Users, Calendar, BookOpen } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Code,
    title: 'Coding Challenges',
    description: 'Sharpen your skills with our regular coding challenges and competitions.'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Connect with like-minded developers and get help when you need it.'
  },
  {
    icon: Calendar,
    title: 'Tech Events',
    description: 'Attend workshops, hackathons, and meetups to stay updated with the latest trends.'
  },
  {
    icon: BookOpen,
    title: 'Learning Resources',
    description: 'Access a curated collection of tutorials, articles, and courses.'
  }
]

export default function Features() {
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (featuresRef.current) {
      gsap.fromTo(
        featuresRef.current.querySelectorAll('.feature-card'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }
  }, [])

  return (
    <section className="py-20 bg-background">
      <div ref={featuresRef} className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-primary/10"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4 transition-transform duration-300 transform feature-icon" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

