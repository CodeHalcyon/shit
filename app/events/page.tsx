import { Metadata } from 'next'
import Events from '@/components/events'

export const metadata: Metadata = {
  title: 'CodeOholics Events',
  description: 'Discover upcoming and past events organized by CodeOholics.',
}

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-primary mt-[70px]">CodeOholics Events</h1>
      <div className="bg-card text-card-foreground rounded-lg p-6 shadow-lg mb-8">
        <p>
          Join us for exciting hackathons, workshops, and tech talks. Our events are designed to 
          challenge your skills, expand your knowledge, and connect you with fellow coding enthusiasts.
        </p>
      </div>
      <Events />
    </div>
  )
}

