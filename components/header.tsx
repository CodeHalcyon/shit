'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Code2, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">CodeOholics</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/events" className="text-foreground hover:text-primary transition-colors">Events</Link>
            <Link href="/resources" className="text-foreground hover:text-primary transition-colors">Resources</Link>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link href="https://linktr.ee/CodeoholicsCommunity" target="_blank" rel="noopener noreferrer">Join Us</Link>
            </Button>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-primary">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t mt-2"
          >
            <nav className="flex flex-col items-center py-4 space-y-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/events" className="text-foreground hover:text-primary transition-colors">Events</Link>
              <Link href="/resources" className="text-foreground hover:text-primary transition-colors">Resources</Link>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full max-w-xs" asChild>
                <Link href="https://linktr.ee/CodeoholicsCommunity" target="_blank" rel="noopener noreferrer">Join Us</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

