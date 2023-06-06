import rule1 from './assests/rules/rule1.jpg'
import rule2 from './assests/rules/rule2.jpg'
import rule3 from './assests/rules/rule3.jpg'
import rule4 from './assests/rules/rule4.jpg'

const Rules = () => {
    return ( 
        <section className='grid md:grid-cols-3 gap-10 max-w-5xl mx-auto px-4 my-4 text-white'>
            <div className="md:col-span-3 py-8">
                <h1 className='text-xl text-center'>Da' Rules</h1>
            </div>
            <div className='rounded-2xl overflow-hidden shadow-2xl p-4'>
                <img src={rule1} alt="" />
                <h2 className="text-xl my-4 ">Rule 1</h2>
                <p>To win, connect 4 beads of the same color in a column (vertically)</p>
            </div>
            <div className='rounded-2xl overflow-hidden shadow-2xl p-4'>
                <img src={rule2} alt="" />
                <h2 className="text-xl my-4 ">Rule 2</h2>
                <p>There's more ways to win! Connect 4 beads of the same color in a row (horizontal)</p>
            </div>
            <div className='rounded-2xl overflow-hidden shadow-2xl p-4'>
                <img src={rule3} alt="" />
                <h2 className="text-xl my-4 ">Rule 3</h2>
                <p>You could also win by connecting 4 beads of the same color in a diagonally</p>
            </div>
            <div className='rounded-2xl overflow-hidden shadow-2xl p-4'>
                <img src={rule4} alt="" className='mx-auto'/>
                <h2 className="text-xl my-4 ">Rule 4</h2>
                <p>One more thing... Each player has only a 15 second turn so be quick and have fun!</p>
            </div>
        </section>
     );
}
 
export default Rules;