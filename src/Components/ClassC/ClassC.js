import React, { useContext } from 'react';
import { classContext } from '../../App';


const ClassC = () => {
    const [count, setCount] = useContext(classContext)
    return (
        <div>
            <h4>I am a :{count} </h4>
            <button onClick ={()=>setCount(count + 1)}>increase from grandchild</button>
        </div>
    );
};

export default ClassC;