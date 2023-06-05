import { useState } from "react";
import { useParams } from "react-router-dom";
import redBall from './assests/red.png'
import yellowBall from './assests/yellow.png'
import Timer from "./Timer";
import WinnerPopUp from "./WinnerPopUp";

const Button = ({array, column, cell}) => {
    let isRed = false
    let isYellow = false
    if (array[column][cell] === 'red') {
        isRed = true
    }
    if (array[column][cell] === 'yellow') {
        isYellow = true
    }

    return (
        <button className={`myCol-${column}-${cell} bg-blue-900 border border-black flex justify-center mx-auto items-center h-10 w-10 rounded-full shadow-inner shadow-black`}>
            {/* <span className="">{array[column][cell]}</span> */}
            {isRed && <img src={redBall} alt="" className="btn rounded-full"/>}
            {isYellow && <img src={yellowBall} alt="" className="btn rounded-full"/>}
        </button>
      );
}
 

const Gameboard = () => {
    const {redPlayer, yellowPlayer} = useParams() //player names
    const [player, setPlayer] = useState('red'); //player colors
    const [currentPlayer, setCurrPlayer] = useState(redPlayer) //player making current move
    const [winner, setWinner] = useState(false) //isWinner bool
    const [colArray] = useState(
        [
            [],[],[],
            [],[],[],
            []
        ]
    )
    const [rowArray] = useState(
        [
            [],[],[],
            [],[],[], []
        ]
    )
    let [timer, setTimer] = useState({num: 30})

    const [col0Click, setCol0Click] = useState(0)
    const [col1Click, setCol1Click] = useState(0)
    const [col2Click, setCol2Click] = useState(0)
    const [col3Click, setCol3Click] = useState(0)
    const [col4Click, setCol4Click] = useState(0)
    const [col5Click, setCol5Click] = useState(0)
    const [col6Click, setCol6Click] = useState(0)
    
    
    const columnClick = (colNum, colClicks, incClicks) => {
        switchPlayer();
        
        // HANDLES VERTICAL TRACKING
        colArray[colNum].push(player);
        // HANDLES HORIZONTAL HORIZONTAL
        rowArray[colClicks][colNum] = player
        // TRACKS HOW MNAY TIMES A COL HAS BEEN CLICKED 
        incClicks(colClicks + 1);

        // THIS SETS OFF A SERIES OF CHECKS FOR A WIN STARTING WITH VERTICAL COLS 
        setWinner( checkColWinner(colArray, colNum) );
        console.log(winner)
    }

    const checkColWinner = (arr, num) => {
        for (let i = 0; i < arr[num].length; i++) {
            if (arr[num][i] !== undefined && arr[num][i] === arr[num][i+1] && arr[num][i] === arr[num][i+2] && arr[num][i] === arr[num][i+3]) {
                return true;
            }
            else {
                return checkRowWinner(rowArray)
                // return false;
            }
        }    
    }
    const checkRowWinner = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr[i].length; i++) {
                if (arr[i][j] !== undefined && arr[i][j] === arr[i][j + 1] && arr[i][j] === arr[i][j + 2] && arr[i][j] === arr[i][j + 3]) {

                    return true;
                }
                else {
                    return checkDiagWinner(colArray, rowArray)  
                }
            }
        }
    }
    const checkDiagWinner = (col, row) => {
        for(let i = 0; i < col.length; i++) {
            for(let j = 0; j < col[i].length; i++) {
                if (row[i+2] === undefined) {
                    return false;
                }

                if(col[i][j] === row[i+1][j+1] && 
                    col[i][j] === row[i+2][j+2] &&
                    col[i][j] === row[i+3][j+3] &&
                    col[i][j] !== undefined) {
                        return true;
                    } else {
                        return false;
                    }
            }
        }
    }
    
    const switchPlayer = () => {
        setTimer({num: 30});

        if (player === 'red') {
            setPlayer('yellow');
            setCurrPlayer(redPlayer)
            document.querySelector('.timer').classList.remove('bg-red-600')
            document.querySelector('.timer').classList.add('bg-yellow-600')
            let timerArrow = document.querySelector('.timer');
            timerArrow.style.setProperty('--currentPlayerColor', 'rgb(202 138 4)')
        } else {
            setPlayer('red');
            setCurrPlayer(yellowPlayer)
            document.querySelector('.timer').classList.remove('bg-yellow-600')
            document.querySelector('.timer').classList.add('bg-red-600')
            let timerArrow = document.querySelector('.timer');
            timerArrow.style.setProperty('--currentPlayerColor', 'rgb(220 38 38)')

        }

        
    }

    return ( 
       <section className="gameboard">
            <div className="flex flex-wrap grow basis-40 items-center justify-center gap-10 max-w-6xl md:h-96 mx-auto">
            <div className="scoreCard bg-red-400 md:order-1">
                <h2 className="uppercase">player red</h2>
                <span className="text-2xl font-extrabold uppercase">{redPlayer}</span>
            </div>
            <div className="scoreCard bg-yellow-400 md:order-3">
                <h2 className="uppercase">player yellow</h2>
                <span className="text-2xl font-extrabold uppercase">{yellowPlayer}</span>
            </div>

            <div className="md:order-2 md:w-1/2 h-full grid grid-cols-7 gap-2 overflow-hidden bg-white rounded-3xl shadow-black shadow-sharp p-1 pb-8 border-2 border-black">
                <div className="board-column-1 grid gap-2 border border-white transition duration-100 hover:border-red-500 " onClick={() => {columnClick(0, col0Click, setCol0Click);}} >
                    <Button array={colArray} column={0} cell={5}/>
                    <Button array={colArray} column={0} cell={4}/>
                    <Button array={colArray} column={0} cell={3}/>
                    <Button array={colArray} column={0} cell={2}/>
                    <Button array={colArray} column={0} cell={1}/>
                    <Button array={colArray} column={0} cell={0}/>
                </div>
                <div className="board-column-2 grid gap-2 border border-white transition duration-100 hover:border-red-500" onClick={() => {columnClick(1, col1Click, setCol1Click);}} >
                    <Button array={colArray} column={1} cell={5}/>
                    <Button array={colArray} column={1} cell={4}/>
                    <Button array={colArray} column={1} cell={3}/>
                    <Button array={colArray} column={1} cell={2}/>
                    <Button array={colArray} column={1} cell={1}/>
                    <Button array={colArray} column={1} cell={0}/>
                </div>
                <div className="board-column-3 grid gap-2 border border-white transition duration-100 hover:border-red-500" onClick={() => {columnClick(2, col2Click, setCol2Click);}} >
                    <Button array={colArray} column={2} cell={5}/>
                    <Button array={colArray} column={2} cell={4}/>
                    <Button array={colArray} column={2} cell={3}/>
                    <Button array={colArray} column={2} cell={2}/>
                    <Button array={colArray} column={2} cell={1}/>
                    <Button array={colArray} column={2} cell={0}/>
                </div>
                <div className="board-column-4 grid gap-2 border border-white transition duration-100 hover:border-red-500" onClick={() => {columnClick(3, col3Click, setCol3Click);}} >
                    <Button array={colArray} column={3} cell={5}/>
                    <Button array={colArray} column={3} cell={4}/>
                    <Button array={colArray} column={3} cell={3}/>
                    <Button array={colArray} column={3} cell={2}/>
                    <Button array={colArray} column={3} cell={1}/>
                    <Button array={colArray} column={3} cell={0}/>
                </div>
                <div className="board-column-5 grid gap-2 border border-white transition duration-100 hover:border-red-500" onClick={() => {columnClick(4, col4Click, setCol4Click);}} >
                    <Button array={colArray} column={4} cell={5}/>
                    <Button array={colArray} column={4} cell={4}/>
                    <Button array={colArray} column={4} cell={3}/>
                    <Button array={colArray} column={4} cell={2}/>
                    <Button array={colArray} column={4} cell={1}/>
                    <Button array={colArray} column={4} cell={0}/>
                </div>
                <div className="board-column-6 grid gap-2 border border-white transition duration-100 hover:border-red-500" onClick={() => {columnClick(5, col5Click, setCol5Click);}} >
                    <Button array={colArray} column={5} cell={5}/>
                    <Button array={colArray} column={5} cell={4}/>
                    <Button array={colArray} column={5} cell={3}/>
                    <Button array={colArray} column={5} cell={2}/>
                    <Button array={colArray} column={5} cell={1}/>
                    <Button array={colArray} column={5} cell={0}/>
                </div>
                <div className="board-column-7 grid gap-2 border border-white transition duration-100 hover:border-red-500" onClick={() => {columnClick(6, col6Click, setCol6Click);}} >
                    <Button array={colArray} column={6} cell={5}/>
                    <Button array={colArray} column={6} cell={4}/>
                    <Button array={colArray} column={6} cell={3}/>
                    <Button array={colArray} column={6} cell={2}/>
                    <Button array={colArray} column={6} cell={1}/>
                    <Button array={colArray} column={6} cell={0}/>
                </div>
            </div>
       </div>
       <Timer player={player} switchPlayer={switchPlayer} timer={timer} setTimer={setTimer}/>
       {winner && <WinnerPopUp player={player} playerName={currentPlayer} setWinner={setWinner}/>}
       </section>
     );
}
 
export default Gameboard;