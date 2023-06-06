import { Link } from "react-router-dom/cjs/react-router-dom.min";

const TopMenu = () => {
    return ( 
        <section className="flex items-center justify-between max-w-xl px-10 my-8 mx-auto">
            <Link to='/' className="bg-black bg-opacity-25 px-4 py-2 rounded-3xl uppercase text-opacity-85 text-white">
                Menu
            </Link>
            <div className='text-center font-header'>
                <h1 className="text-white text-xl">Connect4</h1>
                <p className="text-white text-xl">by NRG</p>
            </div>
            <button 
                onClick={() => {window.location.reload(true)}}
                className="bg-black bg-opacity-25 px-4 py-2 rounded-3xl uppercase text-opacity-85 text-white">
                Restart
            </button>
        </section>
     );
}
 
export default TopMenu;