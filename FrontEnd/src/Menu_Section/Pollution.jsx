import React,{useContext} from 'react';
import { CreateContext } from '../Context_Globel_Store/CreateContext';

const Pollution = () => {

    const {ContextData , setContextData} = useContext(CreateContext);
    return(
        <div>
            <h1>Pollution</h1>
            <p>{ContextData}</p>
            <button onClick={()=>setContextData("Pollution")}>Pollution</button>
        </div>
    )
}
export default Pollution;