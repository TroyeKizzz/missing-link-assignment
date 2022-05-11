import React, {useState} from 'react';
import { Button, TextField, Box } from '@mui/material';
import './exercises.css';

function Ex7() {
    const [name, setName] = useState({firstname: '', secondname: ''});

    const handleChange = (event) => {
        setName({...name, [event.target.name]:event.target.value});
    }

    const submitForm = () => {
        alert(`Hello ${name.firstname} ${name.secondname}!`);
    }
    
    return (
        <div className="exercise">
            <Box 
                component="form" 
                onSubmit={submitForm}
            >
                <TextField 
                    label='First name' 
                    variant='outlined' 
                    className='ex7-element' 
                    style={{margin:10}} 
                    value={name.firstname} 
                    onChange={handleChange} 
                    name='firstname'
                /> <br/>
                <TextField 
                    label='Second name' 
                    variant='outlined' 
                    className='ex7-element' 
                    style={{margin:10}} 
                    value={name.secondname} 
                    onChange={handleChange} 
                    name='secondname'/> <br/>
                <Button 
                    variant='contained' 
                    className='ex7-element' 
                    onClick={submitForm}
                >
                    GREET ME
                </Button>
            </Box>
        </div>
    );
}

export default Ex7;