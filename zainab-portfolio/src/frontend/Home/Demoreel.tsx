import React from "react";
import { Box, Typography } from "@mui/material";

const DemoReel: React.FC = () => {
    return (
        <Box
            id="demo-reel"
            sx={{
                width: "100%",
                padding: "4rem 2rem",
                backgroundColor: "#fffbde",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
            }}
        >
            <Typography
                variant="h4"
                fontWeight="bold"
                textAlign="center"
                sx={{ color: "#222" }}
            >
                Demo Reel
            </Typography>

            <Box
                sx={{
                    width: "100%",
                    maxWidth: {
                        xs: "100%",   // full width on extra-small screens
                        sm: "90%",    // 90% on small screens
                        md: "1500px",  // fixed size on medium and up
                        lg: "1800px", // larger on large screens
                    },
                    aspectRatio: "16 / 9", // ensures correct height
                }}
            >


                <iframe
                    title="vimeo-player" src="https://player.vimeo.com/video/1032494537?h=5e0a764d9e"
                    width="100%"
                    height="100%"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{
                        border: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "12px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                    }}
                />
            </Box>
        </Box>
    );
};

export default DemoReel;