import React, { useContext } from 'react';
import { classContext } from '../../App';

const ClassA = () => {
    const [count, setCount] = useContext(classContext)
    return (
        <div>
            <h1>I am Rakibur Rahman:{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};

export default ClassA;