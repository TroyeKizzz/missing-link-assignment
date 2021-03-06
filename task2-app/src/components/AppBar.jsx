import MuiAppBar from '@mui/material/AppBar';
import { Toolbar, IconButton, Tooltip, Avatar, Badge, Menu, Typography, MenuItem, Divider } from '@mui/material';
import {Person, Settings, Logout} from '@mui/icons-material';
import image from './avatar.jpg';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function AppBar() {
    let navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const navigateToProfile = () => {
        navigate('/profile');
    }
    const navigateToHome = () => {
        navigate('/');
    }
    const navigateToSettings = () => {
        navigate('/settings');
    }
    return (
        <div>
            <MuiAppBar sx={{ bgcolor: "#4E008E" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
                    <Tooltip title='Your projile'>
                        <IconButton onClick={handleOpenUserMenu}>
                            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={<Avatar sx={{width: 15, height: 15, border:'2px solid #4E008E'}}> </Avatar>}>
                                <Avatar src={image}/>
                            </Badge>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={anchorElUser}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        sx={{marginTop: -0.5}}
                    >
                        <MenuItem sx={{marginBottom: 1}}>
                            <Badge className='icon' overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={<Avatar sx={{width: 15, height: 15, border:'2px solid #FFFFFF'}}> </Avatar>}>
                                <Avatar src={image}/>
                            </Badge>
                            <Typography>Your Name</Typography>
                        </MenuItem>
                        <MenuItem onClick={navigateToProfile}>
                            <Person className='icon'/>
                            <Typography>Profile</Typography>
                        </MenuItem>
                        <Divider/>
                        <MenuItem onClick={navigateToSettings}>
                            <Settings className='icon'/>
                            <Typography>Settings</Typography>
                        </MenuItem>
                        <Divider/>
                        <MenuItem onClick={null}>
                            <Logout className='icon'/>
                            <Typography>Logout</Typography>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </MuiAppBar>
        </div>
    );
}

export default AppBar;
