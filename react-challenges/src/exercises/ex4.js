import React, {useState} from 'react';
import './exercises.css';

function Ex4() {
    const [clicks, setClicks] = useState(0);
    const processClick = () => {
        setClicks(clicks+1);
    }
    
    return (
        <div className="exercise" id='ex2'>
            <p>Button has been clicked {clicks} {clicks > 1 || clicks === 0 ? "times":"time"}</p>
            <button onClick={processClick}>Click me</button>
        </div>
    );
}

export default Ex4;
