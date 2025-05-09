import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

const ReactAPIComponent = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        )
        if (!response.ok) throw new Error('Failed to fetch data')
        const result = await response.json()
        setData(result.slice(0, 5))
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading)
    return (
      <Loader2 className="animate-spin text-blue-500 mx-auto my-10" size={50} />
    )
  if (error)
    return <p className="text-red-500 text-center my-10">Error: {error}</p>

  return (
    <div className="grid gap-4 p-4">
      {data &&
        data.map((item) => (
          <Card key={item.id} className="shadow-lg p-4">
            <CardContent>
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.body}</p>
            </CardContent>
          </Card>
        ))}
    </div>
  )
}

export default ReactAPIComponent
