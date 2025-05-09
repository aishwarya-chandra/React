import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")
    const [isClicked, setIsClicked] = useState(false);

  //useRef hook                                                //gives reference, connects one thing to another
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {                 // useCallback hook used to keep dependencies in cache, memoization
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])             //these are the dependencies

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
      window.navigator.clipboard.writeText(password)
      setIsClicked(true);

    //Reset back after 2 seconds
    setTimeout(() => setIsClicked(false), 2000);
  }, [password])

  useEffect(() => {                                           //useEffect hook used to run on page reload/load and the function passwordGenerator if any changes happen in any of the dependencies
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])  //these are the dependencies
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}                                   //password reference given to ref hook
        />
        <button
        onClick={copyPasswordToClipboard}
        className={`outline-none ${isClicked ? "bg-green-500" : "bg-blue-700"} text-white px-3 py-0.5 shrink-0`}
        >
        {isClicked ? "Copied!" : "Copy"}</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App