// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {

  let myobj = {
    username: "aishwarya",
    age: 21
  }
  let myarr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username='props' btnText="click me" />
      <Card username='aishwarya' btnText="visit me"/>
    </>
  )
}

export default App
