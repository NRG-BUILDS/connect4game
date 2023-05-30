import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Background from "../components/Background";
const Destination = () => {
    const {place} = useParams();
    const { data, isPending, error } = useFetch('https://nrg-builds.github.io/Space/data/data.json');
    
    const switchLink = (e) => {
        let links = document.querySelectorAll('.destLink')
        for(let i = 0; i < links.length; i++) {
            links[i].classList.remove('border-b-white')
            links[i].classList.add('border-b-transparent')
        }
        e.target.classList.remove('border-b-transparent');
        e.target.classList.add('border-b-white');
    }

    const showData = () => {
        let currentData;
        for(let i = 0; i < data.destinations.length; i++) {
            if (data.destinations[i].name == place) {
                currentData = data.destinations[i]
            }
        }
        return currentData
    }
    return ( 
       
        <section className="destination   text-gray-400 max-w-5xl p-1 mx-auto">
            {isPending && <div className="uppercase animate-pulse">Establishing Connection With Base . . .</div>}
            {error && <div className="uppercase animate-pulse">{error}</div>}         
           <h1 className="my-8 text-lg text-center md:text-left">01 <span className="text-white">PICK YOUR DESTINATION</span></h1> 
           {data && <div className="grid md:text-left md:grid-cols-2 gap-10 items-stretch text-center">
                
                <div className="p-10 flex justify-center">
                    <img src={"." + showData().images.png} alt="" />
                </div>
                <div className="relative px-5">
                    <div>
                        <Link to='/destination/Moon' className='destLink border-b-white border-b-4 transition duration-100 mx-4 md:mx-0 md:mr-8' onClick={switchLink}>Moon</Link>
                        <Link to='/destination/Mars' className='destLink border-b-transparent border-b-4 transition duration-100 mx-4 md:mx-0 md:mr-8' onClick={switchLink}>Mars</Link>
                        <Link to='/destination/Europa' className='destLink border-b-transparent border-b-4 transition duration-100 mx-4 md:mx-0 md:mr-8' onClick={switchLink}>Europa</Link>
                        <Link to='/destination/Titan' className='destLink border-b-transparent border-b-4 transition duration-100 mx-4 md:mx-0 md:mr-8' onClick={switchLink}>Titan</Link>
                    </div>
                    <h1 className="bigHeader">{showData().name}</h1>
                    <p className="pb-8">{showData().description}</p>
                    <div className="grid md:grid-cols-2 gap-5 justify-center md:mt-10">
                        <div>
                            <span className="text-gray-400 uppercase">
                                Avg. Distance
                            </span>
                            <span className="block text-4xl text-white">
                                {showData().distance}
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-400 uppercase">
                                Travel
                            </span>
                            <span className="block text-4xl uppercase text-white">
                                {showData().travel}
                            </span>
                        </div>
                    </div>    
                </div>


           </div>}
           {data && <Link to='/crew/person'>
                <div className="exploreBtn uppercase bg-white text-blue-950 text-center
                    h-36 w-36 text-xl mx-auto my-5 grclassName flex items-center justify-center 
                    rounded-full">
                    <p>next: the crew</p>
                </div>
            </Link>}
            

        <Background page={'destination'} />    
        </section>
     );
}
 
export default Destination;