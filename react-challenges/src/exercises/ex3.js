import React from 'react';
import './exercises.css';
import MyButton from './ex3-Button';

function Ex3() {
    const processClick = (event) => {
        alert(`You clicked on ${event.target.innerText}`);
    }
    return (
        <div className="exercise">
            <MyButton onClick={processClick}>Button 1</MyButton>
            <MyButton onClick={processClick}>Button 2</MyButton>
            <MyButton onClick={processClick}>Button 3</MyButton>
        </div>
    );
}

export default Ex3;
