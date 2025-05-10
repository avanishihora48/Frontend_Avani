import React, { useState } from 'react'
import { Card, CardContent } from './components/ui/card'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Accordion = () => {
  const items = [
    {
      title: 'Accordion Item 1',
      content: 'This is the content of accordion item 1.',
    },
    {
      title: 'Accordion Item 2',
      content: 'This is the content of accordion item 2.',
    },
    {
      title: 'Accordion Item 3',
      content: 'This is the content of accordion item 3.',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="max-w-md mx-auto space-y-4">
      {items.map((item, index) => (
        <Card
          key={index}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div
            className="flex justify-between items-center cursor-pointer p-4"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            {activeIndex === index ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </div>
          {activeIndex === index && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="px-4 pb-4"
            >
              <CardContent className="text-gray-700">
                {item.content}
              </CardContent>
            </motion.div>
          )}
        </Card>
      ))}
    </div>
  )
}

export default Accordion
