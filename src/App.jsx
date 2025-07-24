import { useState } from "react";
import Dice from "./Components/Dice"

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [diceList, setDiceList] = useState(() => 
    Array.from({length: 10}, () => ({
      value: getRandomInt(1, 6),
      isClicked: false
    }))
  )

  const nDicesClicked = diceList.filter(d => d.isClicked).length;

  const handleClick = (idx) => {
    setDiceList((prev) => 
      prev.map((dice, i) => 
        i === idx ? {...dice, isClicked: !dice.isClicked} : dice
      )
    );
  }

  const handleRoll = () => {

    if(nDicesClicked===10){
      const value_for_comparison = diceList[0].value;
      const same_values = diceList.filter(d => d.value === value_for_comparison).length;

      (same_values === 10) ? console.log("🎉 You win!") : console.log("❌ You lose!");
    }

    setDiceList((prev)=>
      prev.map((dice) => 
        dice.isClicked ? dice : {...dice, value: getRandomInt(1, 6)}
      )
    );

    
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-gray-200 to-gray-300 min-h-screen">
        <div className="bg-gray-50 shadow-xl flex flex-col justify-center items-center rounded-4xl p-8 max-w-[600px]">
          <h1 className="font-bold text-4xl m-4">Tenzies</h1>
          <p className="text-center m-4">Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
          <div className="grid grid-cols-5 gap-5 m-4">
            {diceList.map((dice, i) => (
              <Dice 
              key={i}
              is_clicked={dice.isClicked}
              handle_click_func={() => handleClick(i)}
              dice_number={dice.value}
              />
            ))}
          </div>
          <button 
          className="bg-blue-600 text-white border-2 border-blue-400 rounded-xl px-6 py-2 m-4 text-lg 
          hover:cursor-pointer hover:bg-blue-400 hover:scale-[105%] active:bg-blue-800 active:scale-[95%]"
          onClick={handleRoll}
          >
            {(nDicesClicked === 10) ? "Check" : "Roll"}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
