import React, { useState, useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import BeamerSVG from "../assets/images/beamer.svg";
import UserflowSVG from "../assets/images/userflow.svg";
import X from "../assets/images/x.svg";

const pages = ["Home", "About", "Products"];

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  const buttonStyle = useMemo(
    () => ({
      base: {
        my: 2,
        mx: 3,
        display: "block",
        textTransform: "none",
        px: 2,
        borderRadius: 1,
        backgroundColor: "#1a57e6",
        color: "white",
        border: "1px solid #1a57e6",
      },
      hover: {
        "&:hover": {
          color: "#1a57e6",
          backgroundColor: "#fff",
          borderRadius: "2rem",
          transition: "ease-in-out 0.2s",
        },
      },
    }),
    []
  );

  const baseStyle = useMemo(
    () => ({
      display: "block",
      marginLeft: "24px",
      backgroundColor: "#1a57e6",
      color: "white",
      border: "1px solid #1a57e6",
      padding: "10px 14px",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "0.2s",
    }),
    []
  );

  const hoverStyle = useMemo(
    () => ({
      color: "#1a57e6",
      backgroundColor: "#fff",
      borderRadius: "2rem",
      transition: "ease-in-out 0.2s",
    }),
    []
  );

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#fff", zIndex: "998", position: "fixed" }}
    >
      <Container
        maxWidth="xl"
        sx={{
          boxShadow:
            "0 0 1px 0 rgba(19, 43, 57, .25), 0 4px 24px -4px rgba(19, 43, 57, .1)",
        }}
      >
        <Toolbar disableGutters>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="https://getbeamer.com" target="_blank">
              <img style={{ color: "#FFCB1F" }} src={BeamerSVG}></img>
            </a>
            <img style={{ padding: "0 7px" }} src={X}></img>
            <a href="https://userflow.com" target="_blank">
              <img style={{ color: "#1a57e6" }} src={UserflowSVG}></img>
            </a>
          </div>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              ml: 2,
            }}
          >
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
              <Button
                onClick={() => navigate("/taskmanager")}
                sx={[buttonStyle.base, buttonStyle.hover]}
              >
                Task Manager
              </Button>
            </SignedIn>
          </Box>

          {isSignedIn ? (
            <UserButton />
          ) : (
            <SignInButton
              forceRedirectUrl="/taskmanager"
              fallbackRedirectUrl="/taskmanager"
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
