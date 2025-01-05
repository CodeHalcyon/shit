import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CodeOholics Resources',
  description: 'Access coding resources, tutorials, and learning materials curated by CodeOholics.',
}

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-primary mt-[70px]">Coding Resources</h1>
      <div className="bg-card text-card-foreground rounded-lg p-6 shadow-lg">
        <p className="mb-4">
          Explore our curated collection of coding resources, tutorials, and learning materials. 
          Whether you're looking to master a new programming language, dive into web development, 
          or explore cutting-edge technologies, we've got you covered.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Programming language tutorials</li>
          <li>Web development frameworks and libraries</li>
          <li>Data structures and algorithms</li>
          <li>Machine learning and artificial intelligence</li>
          <li>Best practices and coding standards</li>
          <li>Project ideas and challenges</li>
        </ul>
        <p>
          Stay tuned as we continue to update and expand our resource library to help you on your 
          coding journey!
        </p>
      </div>
    </div>
  )
}

