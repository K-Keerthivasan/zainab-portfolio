import { useRef } from "react";
import { Box, Typography, IconButton, Grid, CardMedia } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

const headshots = [
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
];

const modelingShots = [
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
];

const btsShots = [
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
    "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/1:1/w_1080,h_1080,c_limit/model%20nidhi%20sunil.jpg",
];

const Gallery = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: "left" | "right") => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: dir === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };

    return (
        <Box sx={{ padding: "4rem 2rem", backgroundColor: "#fdfae1" }}>
            {/* Headshots Section */}
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
                Headshots
            </Typography>
            <Box sx={{ position: "relative" }}>
                <IconButton
                    onClick={() => scroll("left")}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        zIndex: 2,
                        background: "#fff",
                        "&:hover": { background: "#eee" },
                    }}
                >
                    <ArrowBackIos />
                </IconButton>

                <IconButton
                    onClick={() => scroll("right")}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        right: 0,
                        zIndex: 2,
                        background: "#fff",
                        "&:hover": { background: "#eee" },
                    }}
                >
                    <ArrowForwardIos />
                </IconButton>

                <PhotoProvider>
                    <Box sx={{ position: "relative", maxWidth: "100%", overflow: "hidden" }}>
                        <IconButton
                            onClick={() => scroll("left")}
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: 0,
                                zIndex: 2,
                                background: "#fff",
                                "&:hover": { background: "#eee" },
                            }}
                        >
                            <ArrowBackIos />
                        </IconButton>

                        <IconButton
                            onClick={() => scroll("right")}
                            sx={{
                                position: "absolute",
                                top: "50%",
                                right: 0,
                                zIndex: 2,
                                background: "#fff",
                                "&:hover": { background: "#eee" },
                            }}
                        >
                            <ArrowForwardIos />
                        </IconButton>

                        <Box
                            ref={scrollRef}
                            sx={{
                                display: "flex",
                                gap: 2,
                                overflowX: "auto",
                                padding: "1rem 2rem",
                                scrollSnapType: "x mandatory",
                                "& > *": {
                                    scrollSnapAlign: "start",
                                    flex: "0 0 33.33%", // 3 cards per row
                                    maxWidth: "25%",
                                },
                                "&::-webkit-scrollbar": { display: "none" },
                            }}
                        >
                            {headshots.map((src, index) => (
                                <PhotoView key={index} src={src}>
                                    <CardMedia
                                        component="img"
                                        image={src}
                                        alt={`Headshot ${index + 1}`}
                                        sx={{
                                            height: "500px",
                                            width: "100%",
                                            borderRadius: 2,
                                            objectFit: "cover",
                                            boxShadow: 3,
                                            cursor: "pointer",
                                        }}
                                    />
                                </PhotoView>
                            ))}
                        </Box>
                    </Box>
                </PhotoProvider>
            </Box>

            {/* Modeling Shots */}
            <Typography variant="h4" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>
                Modeling Shots
            </Typography>
            <PhotoProvider>
                <Grid container spacing={2}>
                    {modelingShots.map((src, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <PhotoView src={src}>
                                <CardMedia
                                    component="img"
                                    image={src}
                                    alt={`Modeling Shot ${index + 1}`}
                                    sx={{
                                        borderRadius: 2,
                                        objectFit: "cover",
                                        height: "300px",
                                        width: "100%",
                                        cursor: "pointer",
                                    }}
                                />
                            </PhotoView>
                        </Grid>
                    ))}
                </Grid>
            </PhotoProvider>

            {/* BTS Photos */}
            <Typography variant="h4" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>
                BTS / Stills
            </Typography>

            <PhotoProvider>
                <Box
                    sx={{
                        display: "grid",
                        gap: 1,
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(4, 1fr)",
                        },
                        gridAutoRows: "200px",
                        gridAutoFlow: "dense",
                    }}
                >
                    {btsShots.map((src, index) => (
                        <PhotoView key={index} src={src}>
                            <Box
                                component="img"
                                src={src}
                                alt={`BTS ${index + 1}`}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: 2,
                                    cursor: "pointer",
                                    gridColumn: index % 5 === 0 ? "span 2" : "span 1",
                                    gridRow: index % 4 === 0 ? "span 2" : "span 1",
                                }}
                            />
                        </PhotoView>
                    ))}
                </Box>
            </PhotoProvider>
        </Box>
    );
};

export default Gallery;
