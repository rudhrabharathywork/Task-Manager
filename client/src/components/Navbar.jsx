import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from "../assets/images/Beamer x Userflow.jpg"

// const pages = ['Products', 'Pricing', 'Blog'];

function ResponsiveAppBar() {

    return (
        <AppBar position="static" sx={{ bgcolor: "#fff" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        sx={{
                            height: 50,
                            width: 50,
                            borderRadius: 50,
                            mr: 2
                        }}
                        alt="The house from the offer."
                        src={Logo}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 1,
                            display: { md: 'flex' },
                            fontFamily: 'default',
                            color: '#FFCB1F',
                            textDecoration: 'none',
                        }}
                    >
                        Beamer
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 1,
                            display: { md: 'flex' },
                            fontFamily: 'default',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        x
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            display: { md: 'flex' },
                            fontFamily: 'default',
                            color: '#1a57e6',
                            textDecoration: 'none',
                        }}
                    >
                        Userflow
                    </Typography>
                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={[{ my: 2, color: 'black', display: 'block', mx: 3, border: 1 },
                                {
                                    '&:hover': {
                                        color: 'white',
                                        backgroundColor: '#1a57e6',
                                    },
                                }
                                ]}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box> */}

                    <Typography
                        variant="h5"
                        sx={{
                            flexGrow: 1, display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                            fontFamily: 'default',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        Task Manager
                    </Typography>
                    <Box sx={{ flexGrow: 0 }}>
                        <Button
                            sx={[{ my: 2, display: 'block', mx: 3, borderRadius: 1, 
                                textTransform: "none", px: 2, backgroundColor: "#1a57e6", 
                                color: "white", border: "1px solid #1a57e6" },
                            {
                                '&:hover': {
                                    color: '#1a57e6',
                                    backgroundColor: '#fff',
                                },
                            }
                            ]}
                        >
                            Logout
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
