'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const challenges = [
  {
    question: "Write a function that returns the sum of two numbers.",
    initialCode: "function sum(a, b) {\n  // Your code here\n}",
    test: "(a, b) => a + b",
    difficulty: "Easy"
  },
  {
    question: "Create a function that reverses a string.",
    initialCode: "function reverseString(str) {\n  // Your code here\n}",
    test: "(str) => str.split('').reverse().join('')",
    difficulty: "Medium"
  },
  // Add more challenges as needed
]

export default function LiveCodingChallenge() {
  const [currentChallenge, setCurrentChallenge] = useState(0)
  const [code, setCode] = useState(challenges[currentChallenge].initialCode)
  const [result, setResult] = useState('')

  useEffect(() => {
    setCode(challenges[currentChallenge].initialCode)
    setResult('')
  }, [currentChallenge])

  const runCode = () => {
    try {
      const userFunction = new Function(`return ${code}`)()
      const testFunction = new Function(`return ${challenges[currentChallenge].test}`)()
      
      // Test the user's function with some sample inputs
      const testCases = [
        [1, 2],
        [10, -5],
        [0, 0]
      ]

      const results = testCases.map(args => {
        const userResult = userFunction(...args)
        const expectedResult = testFunction(...args)
        return userResult === expectedResult
      })

      if (results.every(Boolean)) {
        setResult('All test cases passed! Great job!')
      } else {
        setResult('Some test cases failed. Keep trying!')
      }
    } catch (error) {
      setResult(`Error: ${error.message}`)
    }
  }

  return (
    <div className="bg-card rounded-lg p-6 max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Live Coding Challenge</h2>
      <p className="text-gray-300 mb-2">Difficulty: {challenges[currentChallenge].difficulty}</p>
      <p className="text-gray-300 mb-4">{challenges[currentChallenge].question}</p>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-40 p-2 mb-4 bg-muted text-white font-mono"
      />
      <div className="flex justify-between">
        <Button onClick={runCode} className="bg-black text-white hover:bg-primary/90 hover:text-black">
          Run Code
        </Button>
        <Button 
          onClick={() => setCurrentChallenge((prev) => (prev + 1) % challenges.length)}
          className="bg-secondary text-white hover:bg-secondary/90"
        >
          Next Challenge
        </Button>
      </div>
      {result && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-2 bg-muted text-white rounded"
        >
          {result}
        </motion.div>
      )}
    </div>
  )
}

