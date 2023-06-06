import { Link } from 'react-router-dom'

const Menu = () => {
    return ( 
        <section className='grid h-screen items-center max-w-2xl mx-auto p-4 py-12'>
            <div className='text-center font-header'>
                <h1 className="text-white text-2xl">Connect4</h1>
                <p className="text-white text-2xl">by NRG</p>
            </div>
            <Link to='/create-players'>
                <div className="fadeIn flex items-center justify-between w-full p-6 text-xl text-white bg-red-500 border-2 border-black rounded-2xl shadow-black shadow-sharp font-bold uppercase">
                    <h2>New Game</h2>
                    <span className="material-icons-outlined">play_arrow</span>
                </div>
            </Link>
            <Link to='/play/player1/player2/load'>
                <div className="fadeIn flex items-center justify-between w-full p-6 text-xl border-2 bg-yellow-500 border-black rounded-2xl shadow-black shadow-sharp font-bold uppercase">
                    <h2>Resume</h2>
                    <span className="material-icons-outlined">schedule</span>
                </div>
            </Link>
            <Link to='/rules'>
                <div className="fadeIn flex items-center justify-between w-full p-6 text-xl border-2 bg-white border-black rounded-2xl shadow-black shadow-sharp font-bold uppercase">
                    <h2>game rules</h2>
                    <span className="material-icons-outlined">menu_book</span>
                </div>
            </Link>
            
        </section>
     );
}
 
export default Menu;