import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface NavigationBarProps {}
type NavigationProp = { title: string; path: string };
const pages: NavigationProp[] = [
  { title: 'Home', path: '/' },
  { title: 'Game', path: '/game' },
  { title: 'Cards', path: '/cards' },
];

export function NavigationBar(props: NavigationBarProps) {
  const navigate = useNavigate();
  function handleClick(item: NavigationProp) {
    navigate(item.path);
  }
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Game
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {pages.map((item) => (
                <Button
                  onClick={() => {
                    handleClick(item);
                  }}
                  sx={{ my: 2, color: 'white'}}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar></Toolbar>
      <Outlet />
    </>
  );
}

export default NavigationBar;
