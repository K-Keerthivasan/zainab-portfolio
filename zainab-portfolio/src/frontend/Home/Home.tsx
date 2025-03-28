import {Box} from "@mui/material";
//import {Stack, Typography} from "@mui/material";
import HeroSection from "./HeroSection.tsx";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../Theme.tsx";
import DemoReel from "./Demoreel.tsx";
import ActingProjects from "./ActingProjects.tsx"; // Import the custom theme


//TODO - Login Portal
// Database - Edit
// Mobile optimization


const Home: React.FC = () => {

   // const items = ["Item 1", "Item 2", "Item 3", "Item 4"];


    return (

        <Box>
            {/* Hero Section */}
            <ThemeProvider theme={theme}>
                <CssBaseline/> {/* Resets default styles for consistency */}
                <HeroSection/>


{/*            <Box sx={{
                backgroundColor: "#fffbde",
                padding: "10px",
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography sx={{alignItems: "center",}}>
                    I worked on Multiple acting projects including
                </Typography>
            </Box>
             Bulletin Section
            <Box sx={{
                backgroundColor: "#fffbde",
                padding: "10px",
                display: "flex",
                justifyContent: "center"
            }}>


                <Stack direction="row" spacing={2} alignItems="center">
                    {items.map((item, index) => (
                        <Typography key={index} variant="body1" sx={{alignItems: "center",}}>
                            • {item}
                        </Typography>
                    ))}
                </Stack>
            </Box>*/}

            <DemoReel />
            <ActingProjects/>
            </ThemeProvider>
        </Box>

    )
}

export default Home;