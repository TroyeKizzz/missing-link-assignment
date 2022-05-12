import React, {useState} from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { Toolbar, Typography, Avatar, Divider, List, ListItem, ListItemButton, Collapse, ButtonBase } from '@mui/material';
import { Dashboard, Person, Settings, ChevronRight, ChevronLeft, Menu } from '@mui/icons-material';
import image from './avatar.jpg'
import { useNavigate } from 'react-router-dom';
import './style.css';

function Drawer() {
    let navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuButton = () => {
        setMenuOpen(!menuOpen);
    }

    const navigateToProfile = () => {
        navigate('/profile');
    }
    const navigateToHome = () => {
        navigate('/');
    }
    const navigateToSettings = () => {
        navigate('/settings');
    }

    return(
        <div className='Drawer'>
            <MuiDrawer variant='permanent' anchor='left' PaperProps={{ sx: {backgroundColor: "black", justifyContent: 'flex-start', color: 'white', maxWidth:350}}}>
                <Toolbar sx={{ bgcolor: "#4E008E" }}>
                    <ButtonBase sx={{width: '100%', height: '100%'}} onClick={navigateToHome}>
                        <Typography sx={{color:'white'}}>
                            TAMK
                        </Typography>
                    </ButtonBase>
                </Toolbar>
                <Avatar src={image} sx={{width:100, height:100, border:'2px solid white', marginX: 'auto', marginY:2}}/>
                <Typography sx={{marginX: 2}}>Sviatoslav Vasev</Typography>
                <Typography sx={{color: 'gray', marginX: 2}}>Summer project manager</Typography>
                <Divider sx={{backgroundColor: 'gray', marginY: 1}}/>
                <List>
                    <ListItem>
                        <ListItemButton sx={{padding: 0}} onClick={navigateToHome}>
                            <Dashboard className='icon'/>
                            <Typography>Home</Typography>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider sx={{backgroundColor: 'gray', marginY: 1}}/>
                <List>
                    <ListItem>
                        <ListItemButton sx={{padding: 0}} onClick={handleMenuButton}>
                            <Menu className='icon'/>
                            <Typography>Menu</Typography>
                            {menuOpen ? <ChevronLeft/> : <ChevronRight/>}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={menuOpen} unmountOnExit>
                        <List>
                            <ListItem>
                                <ListItemButton onClick={navigateToProfile}>
                                    <Person className='icon'/>
                                    <Typography>Profile</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton onClick={navigateToSettings}>
                                    <Settings className='icon'/>
                                    <Typography>Settings</Typography>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </MuiDrawer>
        </div>
    );
}

export default Drawer;