import Demo from './Demo.jsx'

function App() {

  return (
    <>                      {/*(<>__</>) these are called fragments, used because react returns only single element, which inside can have multiple components */}
    <Demo />                {/*the demo file is called */}
      <h1>onto react journey with vite</h1>
    </>
  )
}

export default App