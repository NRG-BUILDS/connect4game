import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Background from "../components/Background";
import useFetch from "../useFetch";
import { useState } from "react";

const Crew = () => {

    const {data, isPending, error} = useFetch('https://nrg-builds.github.io/Space/data/data.json')
    const [index, setIndex] = useState(0)
    const changeCrew = (num) => {
        if(num === -1 && index === 0) {
            setIndex(0)
        } else {
            let i = index + num
            setIndex(i)
        }    
        if (index === (data.crew.length - 1) && num === 1) {
            setIndex(data.crew.length - 1)
        }
    }
    return ( 
        <section className="crew text-gray-400 max-w-5xl p-1 mx-auto">
            {isPending && <div className="uppercase animate-pulse">Establishing Connection With Base . . .</div>}
            {error && <div className="uppercase animate-pulse">{error}</div>}
            <h1 className="my-8 text-lg text-center md:text-left">02 <span className="text-white">MEET YOUR CREW</span></h1> 
            {data && <div className="grid md:text-left md:grid-cols-2 gap-10 items-center text-center">
                <div className="relative px-5">
                    <span className="text-xl pt-8 uppercase">
                        {data.crew[index].role}
                    </span>
                    <h1 className="text-6xl uppercase text-white pb-8">
                        {data.crew[index].name}
                    </h1>
                    <p className="pb-8">{data.crew[index].bio}</p>

                    <div className="grid grid-cols-2 gap-10 justify-between md:mt-10 text-white uppercase text-lg">
                        <button onClick={() => {changeCrew(-1)}} className="inline-block"><span className="material-icons-outlined">navigate_back</span>Prev</button>
                        <button onClick={() => {changeCrew(1)}} className="inline-block">Next<span className="material-icons-outlined">navigate_next</span></button>
                    </div>    
                    
                </div>
                <div className="p-10 flex justify-center">
                    <img src={"." + data.crew[index].images.png} alt=""/>
                </div> 
           </div>}
           
           {data && <Link to='/technology'>
                <div className="exploreBtn uppercase bg-white text-blue-950 text-center
                    h-36 w-36 text-xl mx-auto my-5 grclassName flex items-center justify-center 
                    rounded-full">
                    <p>next: the tech</p>
                </div>
            </Link>  }      

        <Background page={'crew'} />
        </section>
     );
}
 
export default Crew;