import { Box, Typography } from '@mui/material';
import AppBar from '../components/AppBar';
import Drawer from '../components/Drawer';
import './style.css';

function Home() {
  return (
    <div className="Page">
      <AppBar/>
      <Drawer/>
      <Box sx={{marginTop: '64px', marginLeft: '216px'}}>
          <Typography>
              Home page
          </Typography>
      </Box>
    </div>
  );
}

export default Home;
