import Dice from "./Components/Dice"

function App() {

  const groupOfDices = Array.from({length: 10}, (_, i) => (
    <Dice key={i} />
  ))

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-gray-200 to-gray-300 min-h-screen">
        <div className="bg-gray-50 shadow-xl flex flex-col justify-center items-center rounded-4xl p-8 max-w-[600px]">
          <h1 className="font-bold text-4xl m-4">Tenzies</h1>
          <p className="text-center m-4">Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
          <div className="grid grid-cols-5 gap-5 m-4">
            {groupOfDices}
          </div>
          <button className="bg-blue-600 text-white border-2 border-blue-400 rounded-xl px-6 py-2 m-4 text-lg hover:cursor-pointer hover:bg-blue-400 hover:scale-[105%] active:bg-blue-800 active:scale-[95%]">
            Roll
          </button>
        </div>
      </div>
    </>
  )
}

export default App
