

import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Button } from "@mui/material";
import {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";



const Navbar =()=> {

    const [anchorEl,setAnchorEl]=useState(null);
    const isMenuOpen = Boolean(anchorEl);


    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const navItems = ["Home","About"]

    return(
        <div>
            <AppBar position="fixed" sx={{
                backgroundColor: 'rgba(46,28,28,0.8)',
            }}>

                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {/* Logo */}
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Elite
                    </Typography>

                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: "white" }}>
                                {item}
                            </Button>
                        ))}
                    </Box>

                    {/* Mobile Menu Button */}
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuOpen}
                        sx={{ display: { xs: "block", md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Mobile Menu Items */}
                    <Menu
                        anchorEl={anchorEl}
                        open={isMenuOpen}
                        onClose={handleMenuClose}
                        sx={{ display: { xs: "block", md: "none" } }}
                    >
                        {navItems.map((item) => (
                            <MenuItem key={item} onClick={handleMenuClose}>
                                {item}
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>

            </AppBar>

        </div>
    )


}

export default Navbar;
