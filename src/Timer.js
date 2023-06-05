import { useEffect } from "react"

const Timer = ({player, switchPlayer, setTimer, timer}) => {

    useEffect(() => {
        setInterval(() => {
            setTimer((prevState) => {
                if(prevState.num === 0) {
                    
                     switchPlayer();
                     return {num: 30}
                } else {
                    return {
                    num: prevState.num - 0.5,
                    };
                }
                
            })
        }, 1000)
    }, [player])

    return ( 
        <div className="timer bg-red-600 text-white border-2 border-black shadow-sharp shadow-black rounded-2xl p-4 w-40 mx-auto font-bold right-1/2 text-center -translate-y-1">
            <span className="uppercase">player {player} turn</span>
            <h2 className="text-4xl font-extrabold">{timer.num}s</h2>
        </div>
     );
}
 
export default Timer;