import { useState } from 'react'                    //using useState hooks
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)               //useState hook syntax
  // let counter = 5

  const incValue = () => {                            
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter)
    }
    console.log("clicked counter value", counter);
  }

  const decValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
    console.log("clicked counter decrease", counter);
  }

  return (
    <>
      <h1>hello counter</h1>
      <h2>counter value: {counter}</h2>

      <button
        onClick={incValue}                               //trigger on onClick
      >Increase value</button>
      <br/>
      <button
        onClick={decValue}
      >Decrease value</button>
    </>
  )
}

export default App
