'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const STAR_COUNT = 200
const STAR_SIZE = 0.002
const STAR_SPEED = 0.02

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll()

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const astronautY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Star {
      x: number
      y: number
      z: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.z = Math.random() * canvas.width
      }

      move(speed: number) {
        this.z = this.z - speed
        if (this.z <= 0) {
          this.z = canvas.width
        }
      }

      draw() {
        const x = (this.x - canvas.width / 2) * (canvas.width / this.z)
        const y = (this.y - canvas.height / 2) * (canvas.width / this.z)
        const s = STAR_SIZE * (canvas.width / this.z)

        ctx!.beginPath()
        ctx!.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx!.arc(x + canvas.width / 2, y + canvas.height / 2, s, 0, 2 * Math.PI)
        ctx!.fill()
      }
    }

    const stars = Array.from({ length: STAR_COUNT }, () => new Star())

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      stars.forEach(star => {
        star.move(STAR_SPEED)
        star.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
      <motion.div
        style={{ y: astronautY }}
        className="absolute bottom-10 right-10"
      >
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Astronaut floating in space"
          width={200}
          height={200}
          className="animate-float"
        />
      </motion.div>
    </motion.div>
  )
}

