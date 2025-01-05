'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Linkedin } from 'lucide-react'

const founders = [
  {
    name: "Charan Narukulla",
    linkedIn: "https://www.linkedin.com/in/charan-narukulla/",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFvapi1ZKWhAw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697910018010?e=1738800000&v=beta&t=8xaOTuIaTRaNsMv__RYDWP212e5ESK5RGTCt8Ee4Vro",
    testimonial: "Charan's visionary leadership has been instrumental in shaping CodeOholics into the thriving community it is today. His passion for technology and commitment to fostering learning is truly inspiring."
  },
  {
    name: "Abhilash Movva",
    linkedIn: "https://www.linkedin.com/in/abhilashmovva/",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEGmm_G5mD8ZA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690908661981?e=1738800000&v=beta&t=QcPpCGFufovvZtNb6HgokqE4DC6zF1QX5lB0fcD7fHA",
    testimonial: "Abhilash's technical expertise and innovative approach have been crucial in developing cutting-edge projects within CodeOholics. His ability to simplify complex concepts is unparalleled."
  },
  {
    name: "Sourabh Mahindrakar",
    linkedIn: "https://www.linkedin.com/in/sourabh-mahindrakar-7459541b0/",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFSmZ8LcCxGsg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713095859726?e=1738800000&v=beta&t=mqGS3gid6AxqxF2r0ZjA9lVgmC8XtNY6PNz04smbpDk",
    testimonial: "Sourabh's dedication to community building and his knack for organizing engaging events have made CodeOholics a go-to platform for developers. His energy is contagious!"
  },
  {
    name: "Manav Patel",
    linkedIn: "https://www.linkedin.com/in/manav-patel-3964b41ba/",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQFZi4Xjt_VttA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1667932686113?e=1738800000&v=beta&t=6IWt_7-53ah8RNtZApjWwjzWItBq0q9fla6FFGB6mxQ",
    testimonial: "Manav's strategic thinking and business acumen have been key to CodeOholics' growth and partnerships. His vision for the future of tech education is truly revolutionary."
  }
]

const teamMembers = [
  {
    name: "Farhan Ahmed",
    role: "President",
    linkedIn: "https://www.linkedin.com/in/farhan-ahmed-63324b242/",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGQsT-3nsgglA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1703436150518?e=1738800000&v=beta&t=B1otpQA60ZOg5LdeUXcneW0Hj6aHrHiYeTPzZ4uyAk8"
  },
  {
    name: "Leo Nikhil",
    role: "Vice President",
    linkedIn: "https://www.linkedin.com/in/leo-nikhil-mothukuri-5169b021a/",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHuFX0acSCx_w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1674766229032?e=1738800000&v=beta&t=V7HxTS9N4fbCx8CbGPqIUQNWeJ4rm5dxUY4_uSic8Nk"
  },
  {
    name: "Moiduddin Ahmed",
    role: "Events Lead",
    linkedIn: "https://www.linkedin.com/in/moiduddinahmed-79a94923b/",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHcYIAhJzCXTQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730304500293?e=1738800000&v=beta&t=0hJ2wx6mPumev1FXS2aoGaF-TCuT7axt01qg-I_fqGs"
  },
  {
    name: "Hyder ali",
    role: "Technical Lead",
    linkedIn: "https://www.linkedin.com/in/shaik-hyder-ali-694765240/",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHTSnKTVtS8kw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727377344114?e=1738800000&v=beta&t=K6298aoIzfpAfuLpozOOW_oIr-ul4kpv55lYgrhquoA"
  },
  {
    name: "Shaibaz",
    role: "Competitive Programming Lead",
    linkedIn: "https://www.linkedin.com/in/md-shaibaz-707069228/",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEqH9TJTDFzvw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719034277790?e=1738800000&v=beta&t=jQqUtVEZJh7FAijFO8LWhBBAdMYggCmZtqXq7TXZVPs"
  },
  {
    name: "Veda",
    role: "Outreach Lead",
    linkedIn: "https://www.linkedin.com/in/veda-smn-376026277/",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Chetan Sirigiri",
    role: "Development Lead",
    linkedIn: "https://www.linkedin.com/in/chetan-sirigiri/",
    image: "https://media.licdn.com/dms/image/v2/D5603AQE1RbcLWUSAmw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692456474912?e=1738800000&v=beta&t=wlrCmz-FbqnQ9Ayl9EZqxug2lLlIfhamSVT9dv9Jr_A"
  }
]

export default function AboutPage() {
  const [expandedFounder, setExpandedFounder] = useState<string | null>(null)

  const toggleFounder = (name: string) => {
    setExpandedFounder(expandedFounder === name ? null : name)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-primary mt-[70px]">About CodeOholics</h1>
      <div className="bg-card text-card-foreground rounded-lg p-6 shadow-lg mb-8">
        <p className="mb-4">
          CodeOholics is a vibrant community of passionate programmers, developers, and tech enthusiasts. 
          We are dedicated to fostering a collaborative environment where members can learn, grow, and 
          push the boundaries of what's possible in the world of coding.
        </p>
        <p className="mb-4">
          Our mission is to provide a platform for knowledge sharing, skill development, and networking 
          among like-minded individuals who share a love for coding and technology.
        </p>
        <p>
          Whether you're a seasoned professional or just starting your coding journey, CodeOholics 
          offers a space where you can connect with others, participate in exciting events, and 
          access valuable resources to enhance your skills.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-primary">Founding Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {founders.map((founder) => (
          <motion.div
            key={founder.name}
            className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => toggleFounder(founder.name)}
            layout
          >
            <div className="p-6 flex items-center space-x-4">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image 
                  src={founder.image} 
                  alt={founder.name} 
                  fill
                  className="rounded-full object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{founder.name}</h3>
                <Link 
                  href={founder.linkedIn} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline flex items-center mt-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin className="w-4 h-4 mr-1" />
                  LinkedIn
                </Link>
              </div>
              {expandedFounder === founder.name ? (
                <ChevronUp className="flex-shrink-0" />
              ) : (
                <ChevronDown className="flex-shrink-0" />
              )}
            </div>
            <AnimatePresence>
              {expandedFounder === founder.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-sm text-muted-foreground">{founder.testimonial}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-primary">Current Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {teamMembers.map((member) => (
          <div 
            key={member.name} 
            className="bg-card text-card-foreground rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
          >
            <div className="relative w-32 h-32 mb-4">
              <Image 
                src={member.image} 
                alt={member.name} 
                fill
                className="rounded-full object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
            <Link 
              href={member.linkedIn} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline flex items-center"
            >
              <Linkedin className="w-4 h-4 mr-1" />
              LinkedIn
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

