import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*~`+='

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 space-y-6">
        <h1 className="text-white text-4xl text-center">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden bg-white w-1/2 p-2 justify-center">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button
            className="bg-blue-900 text-white px-4 py-2 text-lg rounded-md hover:bg-blue-800 ml-2  hover:cursor-pointer"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex items-center gap-x-6 text-sm text-white">
          <input
            id="lengthRange"
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer accent-blue-600"
          />
          <label className="text-xl">Length: {length}</label>
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput" className="text-xl">
              Numbers
            </label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput" className="text-xl">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
