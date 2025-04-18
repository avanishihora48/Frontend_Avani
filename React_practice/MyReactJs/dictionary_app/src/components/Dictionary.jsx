import { Axios } from 'axios'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Dictionary() {
  const [data, setData] = useState('')
  const [searchWord, setSearchWord] = useState('')

  function getMeaning() {
    Axios.get(
      `http://api.dictionaryapi.dev/v2/entries/en_US/${searchWord}`
    ).then((response) => {
      setData(response.data[0])
    })
  }

  // create event handling function for play and listen each word of meaning with audio play

  function playAudio() {
    let audio = new Audio(data.phonetics[0].audio)
    audio.play()
  }

  return (
    <>
      <div className="p-5 w-auto mx-auto mt-5">
        <br />
        <h1 className="text-center text-4xl">Live Dictionary App</h1>
        <hr className="mx-auto w-52" />

        <div className="flex items-center justify-center mt-9 w-full space-x-2">
          <input
            type="text"
            placeholder="Search here..."
            className="p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black w-96"
          />
          <button className="bg-red-500 text-white p-2 rounded-md">
            <FaSearch />
          </button>
        </div>
      </div>
    </>
  )
}
