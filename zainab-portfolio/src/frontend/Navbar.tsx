import  { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ContactsIcon from "@mui/icons-material/Contacts";
import CollectionsIcon from "@mui/icons-material/Collections";
import ResumeOverlay from "./ResumeOverlay.tsx";
import ContactOverlay from "./ContactOverlay.tsx";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [isResumeOpen, setIsResumeOpen] = useState(false); // Resume overlay state
    const [isContactOpen, setIsContactOpen] = useState(false); // Contact overlay state

    // Mobile menu toggle handlers
    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setAnchorEl(event.currentTarget);
    };


    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // Overlay toggle handlers
    const toggleContactOverlay = () => {
        setIsContactOpen((prev) => !prev);
        handleMenuClose();
    };

    const toggleResumeOverlay = () => {
        setIsResumeOpen((prev) => !prev);
        handleMenuClose();
    };

    const navItems = [
        { name: "Home", icon: <HomeIcon />, link: "/" },
        { name: "Gallery", icon: <CollectionsIcon />, link: "/gallery" },
        { name: "Resume", icon: <SummarizeIcon />, action: toggleResumeOverlay },
        { name: "Contact", icon: <ContactsIcon />, action: toggleContactOverlay },
    ];

    return (
        <AppBar
            position="relative"
            color="primary"
            sx={{
                backgroundColor: "rgba(10,10,10,0.8)",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                padding: 0,
            }}
        >
            <Toolbar
                sx={{
                    width: "100%",
                    display: "flex",
                    padding: "0 20px",
                    justifyContent: "space-between",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        padding: "10px",
                        fontFamily: "'Roboto', sans-serif",
                        color: "white",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            textShadow: "0 0 10px #a88b34, 0 0 20px #a88b34",
                        },
                    }}
                >
                    Zainab
                </Typography>

                {/* Desktop Menu */}
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        gap: "20px",
                        marginLeft: "auto",
                    }}
                >
                    {navItems.map((item) =>
                        item.link ? (
                            <Button
                                key={item.name}
                                component={Link}
                                to={item.link}
                                startIcon={item.icon}
                                sx={{
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    "&:hover": {
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    },
                                }}
                            >
                                {item.name}
                            </Button>
                        ) : (
                            <Button
                                key={item.name}
                                startIcon={item.icon}
                                onClick={item.action}
                                sx={{
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    "&:hover": {
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    },
                                }}
                            >
                                {item.name}
                            </Button>
                        )
                    )}
                </Box>

                {/* Mobile Menu */}
                <Box
                    sx={{
                        display: { xs: "flex", md: "none" },
                        width: "100%",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        paddingRight: "25px",
                        overflow: "hidden",
                    }}
                >
                    <IconButton
                        onClick={handleMenuClick}
                        sx={{ color: "#80ceff", transition: "color 0.3s ease" }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        {navItems.map((item) => (
                            <MenuItem key={item.name} onClick={item.action || handleMenuClose}>
                                {item.link ? (
                                    <Link
                                        to={item.link}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                        }}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                ) : (
                                    <>
                                        {item.icon}
                                        {item.name}
                                    </>
                                )}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>

            <ResumeOverlay isOpen={isResumeOpen} toggleOverlay={toggleResumeOverlay} />
            <ContactOverlay isOpen={isContactOpen} toggleOverlay={toggleContactOverlay} />

        </AppBar>


    );
};

export default Navbar;
