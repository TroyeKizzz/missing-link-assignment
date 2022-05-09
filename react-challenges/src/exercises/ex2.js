import React from 'react';
import './exercises.css';

function Ex2() {
    const processClick = () => {
        alert("Clicked!");
    }
    
    return (
        <div className="exercise" id='ex2'>
            <button onClick={processClick}>Click me</button>
        </div>
    );
}

export default Ex2;
