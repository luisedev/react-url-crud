import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../static/images/avatar.jpeg';
import '../scss/header.scss';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar className="appBar" position="static">
            <Toolbar>
                <Box display="flex" justifyContent="flex-start" m={1} p={1} style={{ width: '100%' }}>
                    
                    {/* Small menu */}
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    
                    >
                        <MenuItem className="menuItem">
                            <Button href="/" color="inherit" >Home</Button>
                        </MenuItem>

                        <MenuItem className="menuItem" href="/urls">
                            <Button href="/urls" color="inherit">Store</Button>
                        </MenuItem>

                        <MenuItem  className="menuItem" href="/axios">
                            <Button href="/axios" color="inherit">Axios</Button>
                        </MenuItem>
                    </Menu>

                    {/* Small menu Icon */}
                    <Box display={{ xs: 'block', md: 'none' }} >
                        <IconButton edge="end" color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <MenuIcon  />
                        </IconButton>
                    </Box>

                    {/* Large menu */}
                    <Box display={{ xs: 'none', md: 'block' }}>
                        <Button href="/" color="inherit" >Home</Button>
                        <Button href="/urls" color="inherit">Store</Button>
                        <Button href="/axios" color="inherit">Axios</Button>
                    </Box>

                </Box>

                {/* Avatar */}
                <Box display="flex" justifyContent="flex-end" m={1} p={1} style={{ width: '100%' }}>
                    <Avatar alt="Luis E." src={avatar} />
                </Box>

            </Toolbar>
        </AppBar>

    );
}

export default Header;