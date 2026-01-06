import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordRef= useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let number = "0123456789"
    let specialchar = "!@#$%^&*"

    if (numberAllowed) str += number
    if (charAllowed) str += specialchar

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className="bg-gray-500 rounded-lg w-full max-w-lg mx-auto m-8 px-4 py-3">
      <h1 className="text-3xl text-white text-center p-4">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="w-full py-1 px-3 bg-white"
          value={password}
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button className="bg-blue-600 text-white shrink-0 py-0.5 px-3" onClick={copyPasswordToClipboard}>
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-3">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setlength(Number(e.target.value))}
        />
        <label>{length}</label>

        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={() => setnumberAllowed(prev => !prev)}
        />
        <label>Numbers</label>

        <input
          type="checkbox"
          checked={charAllowed}
          onChange={() => setcharAllowed(prev => !prev)}
        />
        <label>Characters</label>
      </div>
    </div>
  )
}

export default App
