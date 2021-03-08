import React from 'react';
import ClassC from '../ClassC/ClassC';

const ClassB = () => {
    return (
        <div>
            <h2>I am from class B</h2>
            <ClassC></ClassC>
        </div>
    );
};

export default ClassB;