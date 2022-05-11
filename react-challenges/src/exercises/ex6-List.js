import React, {useState} from 'react';
import './exercises.css';

function AnimalList(props) {
    const getEmoji = (animal) => {
        switch(animal) {
            case 'dog':
                return <span style={{ marginRight: '6px' }}>&#x1F436;</span>;
            case 'cat':
                return <span style={{ marginRight: '6px' }}>&#x1F431;</span>;
            case 'chicken':
                return <span style={{ marginRight: '6px' }}>&#x1F414;</span>;
            case 'cow':
                return <span style={{ marginRight: '6px' }}>&#x1F42E;</span>;
            case 'sheep':
                return <span style={{ marginRight: '6px' }}>&#x1F411;</span>;
            case 'horse':
                return <span style={{ marginRight: '6px' }}>&#x1F40E;</span>;
        }
    }
    return (
        <div>
            {
                props.list.map((element, index) => <div key={index} className='animal-ul'> {getEmoji(element)} {element} </div>)
            }
        </div>
    );
}

export default AnimalList;
