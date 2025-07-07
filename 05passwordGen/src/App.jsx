import { useCallback, useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*"

    for(let i=1;i<length;i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass) 
  },[length,numberAllowed,charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
    }

  useEffect(() => {
    generatePassword()
  },[length,numberAllowed, charAllowed])

  return (
    <div className="password-generator">
      <h1>Password generator</h1>

      <div className="password-display">
        <input
          type="text"
          value={password}
          readOnly
          className="password-input"
          ref={passwordRef}
        />
        <button className="copy-button"
        onClick={copyPasswordToClipboard}
        >copy</button>
      </div>

      <div className="controls">
        <div className="length-control">
          <input type="range" min={6} max={32} value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(Number(e.target.value))}
         />
         <label htmlFor="length">Length: {length}</label>
        </div>

        <div className="checkbox-control">
          <label>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            onChange={()=>{
              setNumberAllowed((prev) => !prev)
            }}
            />
            Numbers
          </label>

          <label>
            <input type="checkbox" 
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            />
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App
