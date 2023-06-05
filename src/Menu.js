import { Link } from 'react-router-dom'

const Menu = () => {
    return ( 
        <section className='grid h-screen items-center gap-10 max-w-2xl mx-auto p-4 py-12'>
            <div>
                <img src="logo.jpg" alt="" />
            </div>
            <Link to='/create-players'>
                <div className="w-full p-6 text-xl text-white bg-red-500 border-2 border-black rounded-2xl shadow-black shadow-sharp font-bold uppercase">
                    <h2>name players</h2>
                </div>
            </Link>
            <Link to='/play/player1/player2'>
                <div className="w-full p-6 text-xl border-2 bg-yellow-500 border-black rounded-2xl shadow-black shadow-sharp font-bold uppercase">
                    <h2>play</h2>
                </div>
            </Link>
            <Link to='/rules'>
                <div className="w-full p-6 text-xl border-2 bg-white border-black rounded-2xl shadow-black shadow-sharp font-bold uppercase">
                    <h2>game rules</h2>
                </div>
            </Link>
            
        </section>
     );
}
 
export default Menu;