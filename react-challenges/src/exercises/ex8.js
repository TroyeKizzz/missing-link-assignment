import React from 'react';
import Card from './ex8-Card';
import './exercises.css';

function Ex8() {
    const array = [
        {
            id: 1,
            setup: "What's the best thing about a Boolean?",
            punchline: "Even if you're wrong, you're only off by a bit"
        },
        {
            id: 2,
            setup: "Why do programmers wear glasses?",
            punchline: "Because they need to C#"
        }
    ];
    
    return (
        <div className="exercise" id='ex8'>
            {array.map((element, index) => <Card key={index} data={element}/>)}
        </div>
    );
}

export default Ex8;
