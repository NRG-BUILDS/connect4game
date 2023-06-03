import { useState } from "react";

const Button = ({array, column, cell}) => {  
    return (
        <button className={`myCol-${column}-${cell} border border-yellow-500 flex justify-center mx-auto items-center h-8 w-8 rounded-full overflow-hidden shadow-inner`}>
            {/* <span className="">{array[column][cell]}</span> */}
            <img src={'../' + array[column][cell] + '.png'} alt="" />
        </button>
      );
}
const Timer = ({player, setPlayer}) => {
    const [timer, setTimer] = useState(30)
    setInterval(() => {
        if (timer === 0) {
            setTimer(30)
        } else {
            setTimer(timer - 1)
        }
    }, 1000)

    return ( 
        <div className="bg-purple-600 p-12 font-bold text-center">
            <span className="uppercase">player {player} turn in</span>
            <h2 className="text-4xl font-extrabold">{timer}s</h2>
        </div>
     );
}

 

const Gameboard = () => {
    const [player, setPlayer] = useState('red');
    const [colArray, setColArray] = useState(
        [
            [],[],[],
            [],[],[],
            []
        ]
    )
    const [rowArray, setRowArray] = useState(
        [
            [],[],[],
            [],[],[]
        ]
    )
    const [col0Click, setCol0Click] = useState(0)
    const [col1Click, setCol1Click] = useState(0)
    const [col2Click, setCol2Click] = useState(0)
    const [col3Click, setCol3Click] = useState(0)
    const [col4Click, setCol4Click] = useState(0)
    const [col5Click, setCol5Click] = useState(0)
    const [col6Click, setCol6Click] = useState(0)
    
    
    const columnClick = (colNum, colClicks, incClicks) => {
        checkWinner(colNum)
        if (player === 'red') {
            setPlayer('yellow')
        } else {
            setPlayer('red')
        }
        // HANDLES VERTICAL CHECKS
        colArray[colNum].push(player);
        // HANDLES HORIZONTAL CHECKS
        rowArray[colClicks][colNum] = player
        // TRACKS HOW MNAY TIMES A COL HAS BEEN CLICKED 
        incClicks(colClicks + 1);
        console.log(rowArray)
    }

    const checkWinner = (arr) => {
        console.log('here')
        for (let i = 0; i < colArray[arr].length; i++) {
            if ( colArray[arr][i] === colArray[arr][i+1] && colArray[arr][i+2] === colArray[arr][i]) {
                console.log('winner')
            }
            else {
                console.log('waiting')
            }
        }    
    }

    return ( 
       <section className="gameboard">
            <div className="flex flex-wrap grow basis-40 items-center justify-center gap-10 mx-auto">
            <div className="md:order-1 bg-white rounded-lg shadow-black shadow-2xl py-5 px-3 h-24 md:h-32 w-1/4 text-center font-bold">
                <h2 className="uppercase">player 1</h2>
                <span className="text-2xl font-extrabold">12</span>
            </div>
            <div className="md:order-3 bg-white rounded-lg shadow-black shadow-2xl py-5 px-3 h-24 md:h-32 w-1/4 text-center font-bold">
                <h2 className="uppercase">player 2</h2>
                <span className="text-2xl font-extrabold">23</span>
            </div>
            <div className="md:order-2 grid grid-cols-7 gap-1 bg-white rounded-lg shadow-black shadow-2xl py-5 px-3">
                <div className="board-column-1 grid gap-4 border hover:border-red-500" onClick={() => {columnClick(0, col0Click, setCol0Click);}} >
                    <Button array={colArray} column={0} cell={5}/>
                    <Button array={colArray} column={0} cell={4}/>
                    <Button array={colArray} column={0} cell={3}/>
                    <Button array={colArray} column={0} cell={2}/>
                    <Button array={colArray} column={0} cell={1}/>
                    <Button array={colArray} column={0} cell={0}/>
                </div>
                <div className="board-column-2 grid gap-4 border hover:border-red-500" onClick={() => {columnClick(1, col1Click, setCol1Click);}} >
                    <Button array={colArray} column={1} cell={5}/>
                    <Button array={colArray} column={1} cell={4}/>
                    <Button array={colArray} column={1} cell={3}/>
                    <Button array={colArray} column={1} cell={2}/>
                    <Button array={colArray} column={1} cell={1}/>
                    <Button array={colArray} column={1} cell={0}/>
                </div>
                <div className="board-column-3 grid gap-4 border hover:border-red-500" onClick={() => {columnClick(2, col2Click, setCol2Click);}} >
                    <Button array={colArray} column={2} cell={5}/>
                    <Button array={colArray} column={2} cell={4}/>
                    <Button array={colArray} column={2} cell={3}/>
                    <Button array={colArray} column={2} cell={2}/>
                    <Button array={colArray} column={2} cell={1}/>
                    <Button array={colArray} column={2} cell={0}/>
                </div>
                <div className="board-column-4 grid gap-4 border hover:border-red-500" onClick={() => {columnClick(3, col3Click, setCol3Click);}} >
                    <Button array={colArray} column={3} cell={5}/>
                    <Button array={colArray} column={3} cell={4}/>
                    <Button array={colArray} column={3} cell={3}/>
                    <Button array={colArray} column={3} cell={2}/>
                    <Button array={colArray} column={3} cell={1}/>
                    <Button array={colArray} column={3} cell={0}/>
                </div>
                <div className="board-column-5 grid gap-4 border hover:border-red-500" onClick={() => {columnClick(4, col4Click, setCol4Click);}} >
                    <Button array={colArray} column={4} cell={5}/>
                    <Button array={colArray} column={4} cell={4}/>
                    <Button array={colArray} column={4} cell={3}/>
                    <Button array={colArray} column={4} cell={2}/>
                    <Button array={colArray} column={4} cell={1}/>
                    <Button array={colArray} column={4} cell={0}/>
                </div>
                <div className="board-column-6 grid gap-4 border hover:border-red-500" onClick={() => {columnClick(5, col5Click, setCol5Click);}} >
                    <Button array={colArray} column={5} cell={5}/>
                    <Button array={colArray} column={5} cell={4}/>
                    <Button array={colArray} column={5} cell={3}/>
                    <Button array={colArray} column={5} cell={2}/>
                    <Button array={colArray} column={5} cell={1}/>
                    <Button array={colArray} column={5} cell={0}/>
                </div>
                <div className="board-column-7 grid gap-4 border hover:border-red-500" onClick={() => {columnClick(6, col6Click, setCol6Click);}} >
                    <Button array={colArray} column={6} cell={5}/>
                    <Button array={colArray} column={6} cell={4}/>
                    <Button array={colArray} column={6} cell={3}/>
                    <Button array={colArray} column={6} cell={2}/>
                    <Button array={colArray} column={6} cell={1}/>
                    <Button array={colArray} column={6} cell={0}/>
                </div>
            </div>
       </div>
       <Timer player={player} setPlayer={setPlayer} />
       </section>
     );
}
 
export default Gameboard;