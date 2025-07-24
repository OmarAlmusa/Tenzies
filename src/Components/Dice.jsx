export default function Dice(props){
    return (
        <>
            <button 
            className={`
            ${props["is_clicked"] ? "bg-green-400": "bg-white"} shadow-md rounded-xl box-border size-15 flex justify-center items-center font-medium text-lg 
            hover:scale-[105%] hover:cursor-pointer active:scale-[95%] active:bg-gray-100
            `}
            onClick={props["handle_click_func"]}    
            >
                {props["dice_number"]}
            </button>
        </>
    )
}