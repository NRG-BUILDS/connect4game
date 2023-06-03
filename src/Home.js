import Gameboard from "./Gameboard";
import Scoreboard from "./Scoreboard";

const Home = () => {
    return ( 
        <div className="home mx-auto">
            <Scoreboard />
            <Gameboard />
        </div>
        
     );
}
 
export default Home;