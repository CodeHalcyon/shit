'use client'

import { useState, useRef, useEffect } from 'react'
import { Calendar, Code, Users, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
)

const AnimatePresence = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  { ssr: false }
)

const pastEvents = [
  { name: "Hack the Verse", date: new Date("2023-12-16"), description: "Nationwide 24-Hour Hackathon Join us for a nationwide 24-hour hackathon exclusively for B.Tech students from across India! Innovate, collaborate, and create nonstop as you tackle challenging problems, develop innovative solutions, and compete for exciting prizes.", link: "https://cmrtc.ac.in/wp-content/uploads/2024/02/HACK-THE-VERSE-REPORT.pdf-1.pdf", icon: Code },
  { name: "Hack for ET Hackathon", date: new Date("2022-04-11"), description: "National-Level Hackathon: A Journey to Innovation Join us for an exhilarating national-level hackathon that attracted 1,152 student registrations and 347 teams. Compete in a challenging journey to identify the top innovators and showcase your skills in solving real-world problems with cutting-edge technology.", link: "https://cmrtc.ac.in/wp-content/uploads/2022/05/Hackathon-REPORT.pdf", icon: Users },
  { name: "Kick Starter", date: new Date("2022-03-05"), description: "Enhance Problem-Solving & Critical Thinking Skills Join us for an exciting event designed to enhance your problem-solving and critical thinking skills. Compete with fellow chapter members and challenge yourself to think outside the box in a series of engaging tasks that foster a spirit of competition and collaboration.", link: "https://cmrtc.ac.in/wp-content/uploads/2022/05/KickStarters-Report.pdf", icon: BookOpen },
  { name: "6 Companies 6 Days", date: new Date("2022-01-01"), description: "Problem-Solving Mastery with Arsh Goyal Join us for an exclusive workshop with Arsh Goyal to master problem-solving techniques and gain insights into cracking interviews at top product-based companies like FAANG! Learn strategies and tips from an industry expert to level up your coding skills.", link: "https://cmrtc.ac.in/wp-content/uploads/2022/05/6-companies-30-days-report.pdf", icon: BookOpen },
  { name: "Chapter Induction", date: new Date("2022-01-22"), description: "Core Team Introduction & Competitive Programming Focus Join us for an exciting event where we'll introduce our core team, unveil our mission, and highlight the importance of competitive programming in shaping future tech leaders. Don't miss out on this opportunity to get involved!", link: "https://cmrtc.ac.in/wp-content/uploads/2022/05/Induction-Report.pdf", icon: Users },
  { name: "Aarambh", date: new Date("2022-11-14"), description: "A Three-Round Challenge Join us for a thrilling three-round coding contest hosted by CodeOholics Club! Designed to foster a coding culture and prepare students for industry-level competitions, this contest will test your problem-solving skills and coding expertise.", link: "https://cmrtc.ac.in/wp-content/uploads/2022/11/CodeOHolics-Aarambh-Report-1.pdf", icon: Code },
  { name: "Club Orientation", date: new Date("2023-01-28"), description: "A Gateway to Coding & Tech Careers Kickstart your journey with the Codeoholics Club! This dynamic event featured engaging sessions on coding challenges, career opportunities, and placement strategies, led by experts like Ibrahim, Astha Sharma, and Sourabh.", link: "https://cmrtc.ac.in/wp-content/uploads/2024/02/Signature-ofHead_20240222_115239_0000.pdf", icon: Users },
  { name: "Codeignite", date: new Date("2023-06-24"), description: "Codeoholics hosted Codeignite 2k23, a dynamic event featuring keynote speaker Sai Krishna Alishala, Founder of Elitceler Technologies. With insightful sessions on career growth, APIs, and Prompt Engineering", link: "https://cmrtc.ac.in/wp-content/uploads/2024/02/Signature-ofHead_20240222_122959_0000.pdf", icon: Code },
  { name: "DSA Bootcamp", date: new Date("2023-11-01"), description: "Master Data Structures and Algorithms Join the DSA Bootcamp led by Gate Asprint and former VP Mohd Ibrahim! This transformative event offers intensive sessions to sharpen your skills in data structures, algorithms, and problem-solving techniques, with expert guidance and strategic insights.", link: "https://cmrtc.ac.in/code-chef-chapter-cmrtc/events-accolades/", icon: BookOpen },
  { name: "Techpreneurship", date: new Date("2024-02-24"), description: "Unveiling the World of Technology & Entrepreneurship Join us for an exciting 1-day workshop organized by CodeOholics and Knowvation! Dive into key topics like web development, IT industry trends, generative AI, and the startup ecosystem, all while learning tools to enhance your skills and advance your career.", link: "https://cmrtc.ac.in/code-chef-chapter-cmrtc/events-accolades/", icon: Users },
  { name: "Tech Genesis", date: new Date("2024-08-10"), description: "Join us for Tech Genesis, where two expert speakers share their valuable insights on securing job placements and overcoming startup challenges.", link: "https://cmrtc.ac.in/wp-content/uploads/2024/08/event-report-tech-GENESIS.pdf", icon: Users },
  { name: "Gemini for everything", date: new Date("2024-09-21"), description: "Simplify Your AI Application Development Join our one-day event to explore Google AI technologies like Gemini, Gemma, GenKit, and PaLM! Gain hands-on experience in creating AI-powered applications, guided by expert speakers, without the need for extensive training.", link: "https://cmrtc.ac.in/wp-content/uploads/2024/09/gemini.pdf", icon: Code },
  { name: "Decentralized Dreamscape", date: new Date("2024-11-07"), description: "A Web3 & Blockchain Event Join us for Decentralized Dreamscape, where we delve into the world of Web3 and blockchain. Hear from expert speakers Mr. Rajashekar and Mr. Siv Ram Shastri, and explore the transformative potential of decentralized technologies and career opportunities in this rapidly evolving space.", link: "https://cmrtc.ac.in/wp-content/uploads/2024/11/Codoholicks.pdf", icon: Code },
]

const upcomingEvents = [
  { name: "Hack the Verse 2.0", date: new Date("2025-01-25T10:00:00"), description: "The next iteration of our flagship hackathon event", link: "#", icon: Code },
]

export default function Events() {
  const [showPastEvents, setShowPastEvents] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const eventsRef = useRef<HTMLDivElement>(null)

  const eventsToShow = showPastEvents ? pastEvents : upcomingEvents

  useEffect(() => {
    if (eventsRef.current) {
      // Animation logic here if needed
    }
  }, [showPastEvents])

  return (
    <section className="py-20 bg-gradient-to-b from-background to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          {showPastEvents ? 'Past Events' : 'Upcoming Events'}
        </h2>
        <div className="flex justify-center mb-8">
          <Button
            onClick={() => setShowPastEvents(!showPastEvents)}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            {showPastEvents ? 'Show Upcoming Events' : 'Show Past Events'}
          </Button>
        </div>
        <div ref={eventsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {eventsToShow.map((event, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="event-card bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <event.icon className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-white">{event.name}</h3>
                  </div>
                  <p className="text-gray-300 flex items-center mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date.toLocaleDateString()}
                  </p>
                  <p className="text-gray-300 mb-4 line-clamp-3">{event.description}</p>
                  <a
                    href={event.link}
                    className="text-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn More
                  </a>
                </div>
              </MotionDiv>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {selectedEvent && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedEvent(null)}
          >
            <MotionDiv
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-lg p-6 max-w-2xl w-full m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{selectedEvent.name}</h3>
              <p className="text-gray-300 mb-4">{selectedEvent.description}</p>
              <p className="text-gray-300 mb-4">Date: {selectedEvent.date.toLocaleDateString()}</p>
              <a
                href={selectedEvent.link}
                className="text-primary transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
              <button
                className="mt-4 text-white px-4 py-2 rounded transition-colors duration-300"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </section>
  )
}

