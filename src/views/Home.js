import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Background from "../components/Background";

const Home = () => {
    return ( 
        <main className="home max-w-5xl p-4 mx-auto text-gray-300 text-center">
            <div>
                <span className="uppercase font-bold rounded-full">So, you want to travel to</span>
                <span className="text-8xl font-fontBig my-5 text-white uppercase block">Space</span>
                <p>Let's face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we'll give you a truly out of this world experience!</p> 
            </div>
            <Link to='/destination/Moon'>
                <div className="exploreBtn uppercase bg-white text-blue-950 text-center
                    h-36 w-36 text-xl mx-auto my-5 grclassName flex items-center justify-center 
                    rounded-full">
                    <p>Explore</p>
                </div>
            </Link>
        <Background page={'home'} />    
        </main>
     );
}
 
export default Home;