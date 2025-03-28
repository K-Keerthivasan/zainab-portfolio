import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    typography: {
        fontFamily: "'Roboto', sans-serif", // Set global font
        h1: {
            fontSize: "3rem",
            fontWeight: 700,
            color: "#000000", // Softer neutral tone
        },
        h2: {
            fontSize: "2.5rem",
            fontWeight: 600,
            color: "#000000", // Softer neutral tone
        },
        h3: {
            fontSize: "2rem",
            fontWeight: 500,
            color: "#000000", // Softer neutral tone
        },

        h6: {
            fontSize: "1.2rem",
            fontWeight: 500,
            color: "black",
        },

        body1: {
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "#000000", // Softer neutral tone

        },
        body2: {
            fontSize: "0.875rem",
            lineHeight: 1.5,
            color: "#000000", // Softer neutral tone

        },
    },
});

export default theme;
