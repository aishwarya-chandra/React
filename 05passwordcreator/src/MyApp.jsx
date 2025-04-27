//gives password of written length and includes letters, numbers or characters accordingly

import { useState } from 'react'

function MyApp() {
  const [count, setCount] = useState(8)
  let [password, setPassword] = useState("abcdrghi")
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)

  function checkBool(num, number, char) {
    console.log(number, char)

    if (char == true) {
      characterPassword(num)
    }
    else if (number == true) {
      numberPassword(num)
    }
    else {
      letterPassword(num)
    }
  }

  function letterPassword(num) {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomStr = "";
    for (let i = 0; i < num; i++) {
      randomStr = randomStr + letters[Math.floor(Math.random() * letters.length)];
    }
    console.log(randomStr);
    setPassword(randomStr)
  }

  function numberPassword(num) {
    const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomStr = "";
    for (let i = 0; i < num; i++) {
      randomStr = randomStr + str[Math.floor(Math.random() * str.length)];
    }
    console.log(randomStr);
    setPassword(randomStr)
  }

  function characterPassword(num) {
    const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let randomStr = "";
    for (let i = 0; i < num; i++) {
      randomStr = randomStr + str[Math.floor(Math.random() * str.length)];
    }
    console.log(randomStr);
    setPassword(randomStr)
  }

  return (
    <> 
      <div className="w-full h-screen duration-200 "
        style={{ backgroundColor: "gray" }}>
        <div className='flex justify-center gap-3'>
          {/* <blockquote className='py-4 px-4 border-1 rounded-xl'>{password}</blockquote> */}
          <input
            type='text'
            value={password}
            placeholder='password'
            readOnly
            className='py-4 px-4 border-1 rounded-xl'/>
          <button
            onClick={() => setCount(count + 1, checkBool(count+1,number,char))}
            className='border-1 rounded-3xl py-4 px-2'
          >Length:{count}</button>
          
            <button
            onClick={() => setNumber(!number,setCount(count + 1, checkBool(count+1,!number,char)))}
            className='border-1 rounded-3xl py-4 px-2'
          >Numbers:{number}</button>
          
            <button
            onClick={() => setChar(!char,setCount(count + 1, checkBool(count+1,number,!char)))}
            className='border-1 rounded-3xl py-4 px-2'
            >Characters:{char}</button>
          </div>
      </div>
    </>
  )
}

export default MyApp
