import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [redPlayer, setRedPlayer] = useState('');
    const [yellowPlayer, setYellowPlayer] = useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/play/${redPlayer}/${yellowPlayer}`)

    }

    return ( 
        <section>
            <form onSubmit={handleSubmit}>
                <label>Red player</label>
                <input 
                    type="text"
                    placeholder="Choose a name"
                    value={redPlayer}
                    onChange={(e) => {
                        setRedPlayer(e.target.value);
                    }} />
                <label>Yellow player</label>
                <input 
                    type="text"
                    placeholder="Choose a name"
                    value={yellowPlayer}
                    onChange={(e) => {
                        setYellowPlayer(e.target.value)
                    }} />

                <button>PLAY!</button>    
            </form>
        </section>
     );
}
 
export default Create;