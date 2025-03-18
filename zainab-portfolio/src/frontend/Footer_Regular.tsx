import {AppBar, Toolbar, Typography, IconButton, Box} from "@mui/material";
 import {Facebook} from "@mui/icons-material";
import {Instagram} from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Mail} from "@mui/icons-material";

const socialLinks = [
    {
        href:" href=\"https://kk-dev-portfolio.web.app/",
        icon:<Instagram />,
    },
    {
        href:" href=\"https://kk-dev-portfolio.web.app/",
        icon:<Facebook />,
    },

    {
        href:" href=\"https://kk-dev-portfolio.web.app/",
        icon:<LinkedInIcon />,
    },

    {
        href:" href=\"https://kk-dev-portfolio.web.app/",
        icon:<Mail/>,
    },
]


const FooterRegular = () => {
    return (

        <AppBar position="relative" color="primary"
                component="footer"
                sx={{
                    backgroundColor: 'rgba(10,10,10,0.8)',
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    padding: 0,
                    borderRadius: 0,
                    width: '100%',
                }}>
            <Toolbar
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between", // Ensures proper spacing in desktop
                    textAlign: "center",
                    gap: { xs: "10px", md: "0" }, // Adds spacing in mobile
                }}
            >
                <Typography variant="h6"
                            sx={{
                                textAlign: { xs: "center", md: "left" },
                                fontSize: { xs: "12px", md: "16px" },
                                width: "100%",
                            }}
                >

                    Designed and Developed By KK

                </Typography>


                {/* Right Section */}
                <Box sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-end" },  // Aligns icons to the right
                    alignItems: "center",
                    gap: "5px",
                    width: "100%", // Ensures alignment works
                    maxWidth: "200px", // Prevents excessive spacing on large screens

                }}>
                    {/* Portfolio Link */}
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                        >
                            <IconButton
                                sx={{
                                    color: "#fff2b2",
                                    transition: "color 0.3s ease",
                                    "&:hover": {
                                        color: "#ffae00",
                                    },
                                }}
                            >
                                {link.icon}
                            </IconButton>
                        </a>
                    ))}


                </Box>



            </Toolbar>
        </AppBar>

    );
};

export default FooterRegular;
