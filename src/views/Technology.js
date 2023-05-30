import { useState } from "react";
import Background from "../components/Background";
import useFetch from "../useFetch";

const Technology = () => {
    const {data, isPending, error} = useFetch('https://nrg-builds.github.io/Space/data/data.json')
    const [index, setIndex] = useState(0)
    const changeTech = (num, e) => {
        setIndex(num);

        let links = document.querySelectorAll('.roundBtn')
        for(let i = 0; i < links.length; i++) {
            links[i].classList.remove('bg-white')
            links[i].classList.remove('text-gray-900')
        }
        e.target.classList.add('bg-white');
        e.target.classList.add('text-gray-900');
    }

    return ( 
        <section className="technology text-gray-400 max-w-5xl p-1 mx-auto">
            {isPending && <div className="uppercase animate-pulse">Establishing Connection With Base . . .</div>}
            {error && <div className="uppercase animate-pulse">{error}</div>}
           <h1 className="my-8 text-lg text-center md:text-left">03 <span className="text-white">SPACE LAUNCH 101</span></h1>
           {data && <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="">
                    <img src={"." + data.technology[index].images.portrait} alt="" className="hidden md:block"/>
                    <img src={"." + data.technology[index].images.landscape} alt="" className="md:hidden"/>
                </div>
                <div className="md:flex items-stretch">
                    <div className="flex justify-evenly content-around md:grid">
                        <button onClick={(e) => {changeTech(0, e)}} className="roundBtn bg-white rounded-full flex justify-center items-center h-16 w-16 text-lg border-2 border-white">1</button>
                        <button onClick={(e) => {changeTech(1, e)}} className="roundBtn rounded-full flex justify-center items-center h-16 w-16 text-lg border-2 border-white">2</button>
                        <button onClick={(e) => {changeTech(2, e)}} className="roundBtn rounded-full flex justify-center items-center h-16 w-16 text-lg border-2 border-white">3</button>
                    </div>
                    <div className="text-center md:text-left p-4">
                        <span className="block uppercase">The tech...</span>
                        <h1 className="bigHeader">{data.technology[index].name}</h1>
                        <p>{data.technology[index].description}</p>
                    </div>
                </div>
                
           </div>}
           <a href='https://nrg.netlify.app'>
                <div className="exploreBtn uppercase bg-white text-blue-950 text-center
                    h-36 w-36 text-xl mx-auto my-5 grclassName flex items-center justify-center 
                    rounded-full">
                    <p>the dev behind the site</p>
                </div>
            </a>
        <Background page={'technology'} />
        </section>
     );
}
 
export default Technology;