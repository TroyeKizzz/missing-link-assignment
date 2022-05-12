import AppBar from '../components/AppBar';
import Drawer from '../components/Drawer';
import { Box, Typography } from '@mui/material';
import './style.css';

function Profile() {
  return (
    <div className="Page">
      <AppBar/>
      <Drawer/>
      <Box sx={{marginTop: '64px', marginLeft: '216px'}}>
          <Typography>
              Profile page
          </Typography>
      </Box>
    </div>
  );
}

export default Profile;
