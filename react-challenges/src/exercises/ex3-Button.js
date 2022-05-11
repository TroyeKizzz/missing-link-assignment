import React from 'react';
import './exercises.css';

function MyButton(props) {
    const processClick = (event) => {
        if (typeof props.onClick === "function") {
            props.onClick(event);
        }
    }
    
    return (
        <button onClick={processClick} className='ex3-button'>{props.children}</button>
    );
}

export default MyButton;
