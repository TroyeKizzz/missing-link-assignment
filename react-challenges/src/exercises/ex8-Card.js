import React from 'react';
import { CardContent, Typography } from '@mui/material';
import MUICard from '@mui/material/Card';
import './exercises.css';

function Card(props) {
    return (
        <div>
            <MUICard style={{margin: 10, width: 350}}>
                <CardContent>
                    <Typography variant='h6' style={{fontWeight: 600, marginTop: 10}}>{props.data.setup}</Typography>
                    <Typography variant='body1' style={{marginTop: 15}}>{props.data.punchline}</Typography>
                </CardContent>
            </MUICard>
        </div>
    );
}

export default Card;
