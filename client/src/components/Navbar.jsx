import React, { useState, useMemo } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from "../assets/images/Beamer x Userflow.jpg";
import { SignedIn, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'About', 'Products'];

function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
    const { isSignedIn } = useUser();
    const navigate = useNavigate();

    const buttonStyle = useMemo(() => ({
        base: {
            my: 2,
            mx: 3,
            display: 'block',
            textTransform: 'none',
            px: 2,
            borderRadius: 1,
            backgroundColor: '#1a57e6',
            color: 'white',
            border: '1px solid #1a57e6',
        },
        hover: {
            '&:hover': {
                color: '#1a57e6',
                backgroundColor: '#fff',
                borderRadius: '2rem',
                transition: 'ease-in-out 0.2s',
            },
        },
    }), []);

    const baseStyle = useMemo(() => ({
        display: 'block',
        marginLeft: '24px',
        backgroundColor: '#1a57e6',
        color: 'white',
        border: '1px solid #1a57e6',
        padding: '10px 14px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: '0.2s',
    }), []);

    const hoverStyle = useMemo(() => ({
        color: '#1a57e6',
        backgroundColor: '#fff',
        borderRadius: '2rem',
        transition: 'ease-in-out 0.2s',
    }), []);

    return (
        <AppBar position="static" sx={{ bgcolor: '#fff' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        sx={{ height: 50, width: 50, borderRadius: 50, mr: 2 }}
                        alt="Logo"
                        src={Logo}
                    />
                    <Typography variant="h6" noWrap sx={{ mr: 1, color: '#FFCB1F' }}>
                        <Link href="https://getbeamer.com" target="_blank" style={{ textDecoration: "none", color: '#FFCB1F' }}>Beamer</Link>
                    </Typography>
                    <Typography variant="h6" noWrap sx={{ mr: 1, color: 'black' }}>
                        x
                    </Typography>
                    <Typography variant="h6" noWrap sx={{ color: '#1a57e6' }}>
                        <Link href="https://userflow.com" target="_blank" style={{ textDecoration: "none", color: '#1a57e6' }}>Userflow</Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', ml: 2 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => navigate(`/${page.toLowerCase()}`)}
                                sx={[buttonStyle.base, buttonStyle.hover]}
                            >
                                {page}
                            </Button>
                        ))}

                        <SignedIn>
                            <Button onClick={() => navigate('/taskmanager')} sx={[buttonStyle.base, buttonStyle.hover]}>
                                TaskManager
                            </Button>
                        </SignedIn>
                    </Box>

                    {isSignedIn ? (
                        <UserButton />
                    ) : (
                        <SignInButton
                            forceRedirectUrl="/taskmanager"
                            style={isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        />
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
