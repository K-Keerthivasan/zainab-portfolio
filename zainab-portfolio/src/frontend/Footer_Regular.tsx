import {AppBar, Toolbar, Typography, Button, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from "react-router-dom";

const FooterRegular = () => {
    return (

        <AppBar position="relative"  elevation={0} color="primary"
                sx={{
                    backgroundColor: 'rgba(10,10,10,0.8)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    padding: 0,
                    borderRadius: 0,

                }}>
            <Toolbar>

                Hello
            </Toolbar>
        </AppBar>

    );
};

export default FooterRegular;
