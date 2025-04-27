
function MyApp() {

  const red = () => {
    document.querySelector("body").style.backgroundColor = 'red'
  }
  const green = () => {
    document.querySelector("body").style.backgroundColor = 'green'
  }
  const blue = () => {
    document.querySelector("body").style.backgroundColor = 'blue'
  }
  const pink = () => {
    document.querySelector("body").style.backgroundColor = 'pink'
  }
  const grey = () => {
    document.querySelector("body").style.backgroundColor = 'grey'
  }
  const yellow = () => {
    document.querySelector("body").style.backgroundColor = 'yellow'
  }
  const purple = () => {
    document.querySelector("body").style.backgroundColor = 'purple'
  }
  const white = () => {
    document.querySelector("body").style.backgroundColor = 'white'
  }
  const black = () => {
    document.querySelector("body").style.backgroundColor = 'black'
  }

  return (
    <>
      {/* <h1>Background Changer</h1> */}
      <div className="justify-center flex border-1 rounded-3xl py-3 gap-3">
      <button
          onClick={red}
          className="bg-red-600 rounded-3xl border-0 px-4 py-1"
        >Red</button>
        <button
          onClick={green}
          className="bg-green-600 rounded-3xl border-0 px-4 py-1"
        >Green</button>
        <button
          onClick={blue}
          className="bg-blue-600 rounded-3xl border-0 px-4 py-1"
        >Blue</button>
        <button
          onClick={pink}
          className="bg-pink-500 rounded-3xl border-0 px-4 py-1"
        >Pink</button>
        <button
          onClick={grey}
          className="bg-gray-500 rounded-3xl border-0 px-4 py-1"
        >Grey</button>
        <button
          onClick={yellow}
          className="bg-yellow-500 rounded-3xl border-0 px-4 py-1"
        >Yellow</button>
        <button
          onClick={purple}
          className="bg-purple-700 rounded-3xl border-0 px-4 py-1"
        >Purple</button>
        <button
          onClick={white}
          className="bg-white rounded-3xl border-0 px-4 py-1"
        >White</button>
        <button
          onClick={black}
          className="bg-black rounded-3xl border-0 px-4 py-1 text-white"
        >Black</button>
      </div>
    </>
  )
}

export default MyApp
