import { useState } from "react"

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Dice(){

    const [diceNumber, setDiceNumber] = useState(getRandomInt(1, 6))
    return (
        <>
            <button className="bg-white shadow-md rounded-xl box-border size-15 flex justify-center items-center font-medium text-lg
                hover:scale-[105%] hover:cursor-pointer active:scale-[95%] active:bg-gray-100
            ">
                {diceNumber}
            </button>
        </>
    )
}