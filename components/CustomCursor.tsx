'use client'

import { useState, useEffect } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    if (!isLargeScreen) return

    const cursor = document.querySelector('.custom-cursor') as HTMLElement
    const links = document.querySelectorAll('a, button')

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const onMouseEnterLink = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.3 })
    }

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 })
    }

    document.addEventListener('mousemove', onMouseMove)
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink)
      link.addEventListener('mouseleave', onMouseLeaveLink)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink)
        link.removeEventListener('mouseleave', onMouseLeaveLink)
      })
    }
  }, [isLargeScreen])

  if (!isLargeScreen) return null

  return <div className="custom-cursor fixed w-8 h-8 rounded-full bg-primary pointer-events-none z-50 mix-blend-difference" style={{ top: '-4px', left: '-4px' }} />
}

