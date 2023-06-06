import { useState } from "react";
import { useHistory } from "react-router-dom";
import redBall from './assests/red.png'
import yellowBall from './assests/yellow.png'

const Create = () => {
    const [redPlayer, setRedPlayer] = useState('');
    const [yellowPlayer, setYellowPlayer] = useState('');
    const [error, setError] = useState(null)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const p1 = document.getElementById('p1')
        const p2 = document.getElementById('p2')
        if(p1.value === '' || p2.value === '') {
            setError('Please fill names for both balls')
        } else {
                    history.push(`/play/${redPlayer}/${yellowPlayer}/new`)
        }

    }

    return ( 
        <section className="h-screen flex items-center mx-4 justify-center">
            <div className="max-w-5xl text-center mx-auto rounded-3xl border-orange-600 border-4 shadow-2xl">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-xl my-8 font-extrabold">Pick Your Balls</h1>
                    <div className="grid grid-cols-2 items-center">
                        <div className="">
                            <img src={redBall} alt="" className="w-20 h-20 animate-bounce rounded-full mx-auto" />
                            <input 
                                className="w-5/6 mx-auto text-center block bg-transparent border-0 border-b-2 border-red-500 outline-none duration-100 focus:border-white my-8"
                                type="text"
                                id="p1"
                                placeholder="Choose a name"
                                value={redPlayer}
                                onChange={(e) => {
                                    setRedPlayer(e.target.value);
                                }} />
                        </div>
                        <div className="">
                            <img src={yellowBall} alt="" className="w-20 h-20 animate-bounce rounded-full mx-auto" />
                            <input 
                                className="w-5/6 mx-auto text-center block bg-transparent border-0 border-b-2 border-red-500 outline-none duration-100 focus:border-white my-8"
                                type="text"
                                id="p2"
                                placeholder="Choose a name"
                                value={yellowPlayer}
                                onChange={(e) => {
                                    setYellowPlayer(e.target.value)
                                }} />
                        </div>
                    </div>
                    <button className="bg-green-600 my-8 py-2 px-8 rounded-xl border-white border-2 text-white duration-75 hover:shadow-sharp hover:shadow-black">PLAY!</button> 
                    {error && <p>{error}</p>}   
                </form>
            </div>    
        </section>
     );
}
 
export default Create;