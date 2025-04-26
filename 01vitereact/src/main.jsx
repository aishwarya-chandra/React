import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

// function MyApp(){                         //if a function created here and passed in render also works
//   return (
//       <div>
//           <h1>Custom App | chai</h1>
//       </div>
//   )
// }

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (                                                  //react is js behind the screen so this is a react element object
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "customised react"

const reactElement = React.createElement(                                 //the react element object according to the render property
  'a',

  { href: 'https://google.com', target: '_blank' },
  
  'click me to visit google',

  anotherUser,                            //evaluated expression

  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(               //React creates it's own virtual DOM and root of that is div with id root of index.html file
  // <MyApp/>
  // <App/>
  reactElement                                       
)
