import { Link } from "react-router-dom/cjs/react-router-dom.min";

const WinnerPopUp = ({player, playerName, setWinner}) => {
    return ( 
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 w-full bg-green-500 px-4 py-8 text-center">
            <span className="uppercase">{player} player</span>
            <h3 className="text-2xl font-bold">{playerName}</h3>
            <h2 className="text-4xl font-extrabold uppercase my-4">wins</h2>

            <div className="flex justify-between  mt-8 mx-auto max-w-md ">
                <Link to='/create-players'>
                    <button className="border-2 text-white bg-purple-700 border-white rounded-lg p-2 px-6 transition duration-100  hover:shadow-sharp hover:shadow-black">
                        Play Again
                    </button>
                </Link>
                    
                <button 
                    onClick={() => {setWinner(false)}}
                    className="border-2 text-white bg-red-700 border-white rounded-lg p-2 px-6 transition duration-100  hover:shadow-sharp hover:shadow-black">
                    View Board
                </button>
            </div>
        </div>
     );
}
 
export default WinnerPopUp;