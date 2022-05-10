import React, {useState} from 'react';
import './exercises.css';

function Ex5() {
    let array = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
    return (
        <div className="exercise" id='ex5'>
            <ul>
                {
                    array.map((element, index) => <li key={index}>{element}</li>)
                }
            </ul>
        </div>
    );
}

export default Ex5;
