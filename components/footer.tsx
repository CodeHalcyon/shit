import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">CodeOholics</h3>
            <p className="text-muted-foreground">
              Empowering developers to reach their full potential through community, education, and innovation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Connect With Us</h3>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/CodeHalcyon" 
                aria-label="GitHub"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              {/* <motion.a 
                href="#" 
                aria-label="Twitter"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </motion.a> */}
              <motion.a 
                href="https://www.linkedin.com/company/codeoholics-club-cmrtc/" 
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CodeOholics. All rights reserved.</p>
        </div>
      </div>
      {/* <div className="mt-8">
        <form className="max-w-md mx-auto">
          <h4 className="text-lg font-semibold mb-2 text-primary">Subscribe to our newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-md bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-primary/90 hover:text-black transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
        </form>
      </div> */}
    </footer>
  )
}

