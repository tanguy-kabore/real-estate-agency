import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/icons/buildings.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const pages = ['sale', 'rent', 'about', 'contact'];

// Fonction pour traduire le nom de la page
const translatePage = (page) => {
    switch (page) {
        case 'sale':
            return 'vente';
        case 'rent':
            return 'location';
        case 'about':
            return "à-propos";
        case 'contact':
            return 'contact';
        default:
            return page;
    }
};

function Navigation() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
        typography: {
            fontFamily: [
                'Montserrat',
                'sans-serif'
            ].join(','),
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar
                sx={{
                    position: 'relative',
                    backgroundColor: orange[800],
                    boxShadow: 'none'
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    marginRight: '5px'
                                }}>
                                    <img src={logo} alt="logo" />
                                </Box>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontWeight: 600,
                                        letterSpacing: '.1rem',
                                        color: 'white',
                                        textDecoration: 'none'
                                    }}
                                >
                                    Immo Agency
                                </Typography>
                            </Box>
                        </Link>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
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
                                    top: '64px', // Ajustez la valeur en fonction de votre mise en page
                                }}
                            >
                                <MenuItem>
                                    <Link
                                        to='/'
                                        style={{
                                            textAlign: 'center',
                                            color: 'white',
                                            textDecoration: 'none',
                                            textTransform: 'uppercase',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Accueil
                                    </Link>
                                </MenuItem>

                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Link
                                            to={`/${page}`}
                                            style={{
                                                textAlign: 'center',
                                                color: 'white',
                                                textDecoration: 'none',
                                                textTransform: 'uppercase',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            {translatePage(page)}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'end',
                                alignItems: 'center'
                            }}
                        >
                            <Link
                                to='/'
                                style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    marginLeft: '8px',
                                    textDecoration: 'none'
                                }}
                            >
                                Accueil
                            </Link>
                            {pages.map((page) => (
                                <Link
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    to={`/${page}`}
                                    style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        marginLeft: '8px',
                                        textDecoration: 'none'
                                    }}
                                >
                                    {translatePage(page)}
                                </Link>
                            ))}
                            <Link
                                to='http://localhost:3000' // Ajoutez le lien vers la page de connexion
                                target="_blank"  // Cette ligne ouvrira le lien dans un nouvel onglet
                                rel="noopener noreferrer"  // Ceci est recommandé pour des raisons de sécurité
                                style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    marginLeft: '8px',
                                    textDecoration: 'none'
                                }}
                            >
                                Connexion
                            </Link>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default Navigation;