import React, {useState} from 'react';
import './exercises.css';
import AnimalList from './ex6-List';

function Ex6() {
    let array = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
    return (
        <div className="exercise">
            <AnimalList list={array}/>
        </div>
    );
}

export default Ex6;
