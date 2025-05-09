import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')
  const [updateTitle, setUpdateTitle] = useState('')
  const [updateId, setUpdateId] = useState(null)
  const [patchTitle, setPatchTitle] = useState('')
  const [patchId, setPatchId] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/items')
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const addItem = async () => {
    try {
      await axios.post('http://localhost:3000/items', { title })
      setTitle('')
      fetchData()
    } catch (error) {
      console.error('Error adding item:', error)
    }
  }

  const updateItem = async () => {
    try {
      await axios.put(`http://localhost:3000/items/${updateId}`, {
        title: updateTitle,
      })
      setUpdateId(null)
      setUpdateTitle('')
      fetchData()
    } catch (error) {
      console.error('Error updating item:', error)
    }
  }

  const patchItem = async () => {
    try {
      await axios.patch(`http://localhost:3000/items/${patchId}`, {
        title: patchTitle,
      })
      setPatchId(null)
      setPatchTitle('')
      fetchData()
    } catch (error) {
      console.error('Error patching item:', error)
    }
  }

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/items/${id}`)
      fetchData()
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">CRUD App with JSON-Server</h1>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new item"
          className="border p-2 rounded mr-2"
        />
        <Button onClick={addItem}>Add Item</Button>
      </div>
      <div>
        <input
          type="number"
          value={updateId || ''}
          onChange={(e) => setUpdateId(e.target.value)}
          placeholder="Update ID"
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          value={updateTitle}
          onChange={(e) => setUpdateTitle(e.target.value)}
          placeholder="New Title"
          className="border p-2 rounded mr-2"
        />
        <Button onClick={updateItem}>Update Item</Button>
      </div>
      <div>
        <input
          type="number"
          value={patchId || ''}
          onChange={(e) => setPatchId(e.target.value)}
          placeholder="Patch ID"
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          value={patchTitle}
          onChange={(e) => setPatchTitle(e.target.value)}
          placeholder="New Partial Title"
          className="border p-2 rounded mr-2"
        />
        <Button onClick={patchItem}>Patch Item</Button>
      </div>
      <div className="space-y-4">
        {data.map((item) => (
          <Card key={item.id} className="flex justify-between items-center p-4">
            <CardContent>
              <p className="text-lg">{item.title}</p>
            </CardContent>
            <Button variant="destructive" onClick={() => deleteItem(item.id)}>
              Delete
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default App
