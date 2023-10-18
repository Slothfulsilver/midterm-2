import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { ThemeProvider } from '@emotion/react';
import { THEME } from '../../ui/Lucy/theme';
import photo from "../../ui/Lucy/media/Lucy.jpeg";

const pages = ['About Me', 'Career', 'Projects'];

function Navbar({onViewChange, onUserChange}) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [activePage, setActivePage] = React.useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    const handleUser = () => {
        if(anchorElUser=="Lucy"){
            setAnchorElUser("Arturo");
            onUserChange("Arturo");
        }else{
            setAnchorElUser("Lucy");
            onUserChange("Lucy");
        }
    };

    const changePage = (page) => {
        setActivePage(page);
        onViewChange(page);
    }

  return (
    <ThemeProvider theme={THEME}>
        <AppBar position="static" sx={{backgroundColor:'#FFD9DF'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{backgroundColor:'#FFD9DF'}}>
                <AutoStoriesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    textDecoration: 'none',
                    }}
                >
                    PORTAFOLIO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={() => changePage(page)}>
                        <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                <AutoStoriesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    textDecoration: 'none',
                    }}
                >
                    PORTAFOLIO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={() => changePage(page)}
                        sx={{ my: 2, display: 'block' }}
                    >
                        {page}
                    </Button>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Change Profile">
                    <IconButton onClick={handleUser} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src={photo} />
                    </IconButton>
                    </Tooltip>
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;