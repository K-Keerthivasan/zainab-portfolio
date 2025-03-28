import { useRef } from "react";
import { Box, Typography, IconButton, Card, CardMedia, CardContent } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const actingProjects = [
    {
        title: "Outcast",
        role: "Protagonist’s friend",
        image: "https://i.pinimg.com/736x/da/58/75/da5875e18c8cff501f96be73ac099f1d.jpg",
    },
    {
        title: "Execution",
        role: "Chef",
        image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/11/Obama-Modern-Creative-Poster-Idea.jpg",
    },
    {
        title: "Bernard",
        role: "Romantic lead",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2AqixqCGZRlPETLzAKNlLb_fuN_Wc-fsIVw&s",
    },
    {
        title: "Queen Elizabeth I",
        role: "Historical figure in *Orlando*",
        image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/11/Obama-Modern-Creative-Poster-Idea.jpg",
    },
];

const ActingProjects = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.clientWidth / 3; // 3 cards per view
            const { scrollLeft } = scrollRef.current;
            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth,
                behavior: "smooth",
            });
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#fffbd3",
                padding: "4rem 2rem",
                position: "relative",
            }}
        >
            <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 4 }}>
                Acting Projects
            </Typography>

            {/* Arrow Buttons */}
            <IconButton
                onClick={() => scroll("left")}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    backgroundColor: "#fff",
                    "&:hover": { backgroundColor: "#eee" },
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
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    backgroundColor: "#fff",
                    "&:hover": { backgroundColor: "#eee" },
                }}
            >
                <ArrowForwardIos />
            </IconButton>

            {/* Scrollable Container */}
            <Box
                ref={scrollRef}
                sx={{
                    display: "flex",
                    overflowX: "auto",
                    scrollBehavior: "smooth",
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {actingProjects.map((project, index) => (
                    <Card
                        key={index}
                        sx={{
                            flex: "0 0 33.33%", // 3 cards per row
                            maxWidth: "100%",
                            borderRadius: 2,
                            boxShadow: 3,
                            marginX: 1,
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={project.image}
                            alt={project.title}
                            sx={{ height: "550px", objectFit: "cover" }}
                        />
                        <CardContent>
                            <Typography fontWeight="bold">{project.title}</Typography>
                            <Typography variant="body2">{project.role}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default ActingProjects;
