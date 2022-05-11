import React from 'react';
import { CardContent, Typography } from '@mui/material';
import MUICard from '@mui/material/Card';
import './exercises.css';

function Card(props) {
    return (
        <div className='flip-card'>
            <div className='flip-card-inner'>
                <MUICard className='flip-card-front'>
                    <CardContent>
                        <img src={props.data.picture.large} style={{width:'100%'}}/>
                        <Typography variant='body1' style={{fontWeight: 600, marginTop: 10, textAlign: 'left'}}>{props.data.name.first} {props.data.name.last}</Typography>
                        <Typography variant='body2' style={{textAlign: 'left'}}>{props.data.email}</Typography>
                    </CardContent>
                </MUICard>
                <MUICard className='flip-card-back'>
                    <CardContent>
                        <Typography variant='body1' style={{fontWeight: 600, marginTop: 10, textAlign: 'left'}}>More info</Typography>
                        <Typography variant='body2' style={{textAlign: 'left'}}>{props.data.location.country}, {props.data.location.state}</Typography>
                        <Typography variant='body2' style={{textAlign: 'left'}}>{props.data.location.street.name}, {props.data.location.street.number}</Typography>
                    </CardContent>
                </MUICard>
            </div>
        </div>
    );
}

export default Card;
