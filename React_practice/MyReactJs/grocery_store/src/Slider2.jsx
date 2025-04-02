import React, { useState } from 'react'
import { motion } from 'framer-motion'

const veggies = [
  {
    emoji: '🥕',
    colorA: '#ff8c00',
    colorB: '#ff4500',
    quote: 'Eat fresh, feel fresh, live fresh!',
  },
  {
    emoji: '🥬',
    colorA: '#76b947',
    colorB: '#228B22',
    quote: 'Healthy eating is a form of self-respect.',
  },
  {
    emoji: '🍆',
    colorA: '#800080',
    colorB: '#4B0082',
    quote: 'Nourish your body, fuel your life!',
  },
  {
    emoji: '🌽',
    colorA: '#FFD700',
    colorB: '#FFA500',
    quote: 'A balanced diet is a recipe for a happy life!',
  },
  {
    emoji: '🥒',
    colorA: '#4CAF50',
    colorB: '#2E8B57',
    quote: 'Good food, good mood, great life!',
  },
  {
    emoji: '🍅',
    colorA: '#ff4500',
    colorB: '#ff6347',
    quote: 'Let food be thy medicine and medicine be thy food.',
  },
]

export default function Slider2() {
  return (
    <div className="flex flex-col items-center w-full p-6">
      <h2 className="text-3xl font-bold mb-6">Fresh & Healthy Veggies 🍏</h2>
      <div className="slider flex overflow-x-auto gap-6 pb-4">
        {veggies.map((veg, index) => (
          <VeggieCard key={index} {...veg} />
        ))}
      </div>
    </div>
  )
}

function VeggieCard({ emoji, colorA, colorB, quote }) {
  const [showQuote, setShowQuote] = useState(false)

  return (
    <motion.div
      className="flex flex-col items-center p-4 rounded-lg shadow-lg cursor-pointer w-32 h-32 relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.5 }}
      style={{ background: `linear-gradient(135deg, ${colorA}, ${colorB})` }}
      onMouseEnter={() => setShowQuote(true)}
      onMouseLeave={() => setShowQuote(false)}
    >
      <span className="text-5xl">{emoji}</span>
      {showQuote && (
        <motion.p
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-semibold p-2 bg-black bg-opacity-75 rounded-lg text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {quote}
        </motion.p>
      )}
    </motion.div>
  )
}
