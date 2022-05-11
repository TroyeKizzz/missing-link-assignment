import React, { useEffect, useState } from 'react';
import Card from './ex9-Card';
import './exercises.css';

function Ex9() {
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => setUsers(data.results))
        .catch(err => console.error(err))
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    
    return (
        <div className="exercise" id='ex8'>
            {users.map((element, index) => <Card key={index} data={element}/>)}
        </div>
    );
}

export default Ex9;
