import React from "react";
import { Box, Typography } from "@mui/material";

// Function to format **text** to bold
const formatText = (text: string) => {
    const regex = /\*\*(.*?)\*\*/g; // Matches **text**
    return text.split(regex).map((part, index) =>
        index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
};

// 🔹 Text Content as Constants
const name = "Zainab";

const introduction = `Zainab is a recent graduate from **Fanshawe College** for acting on stage and screen. 
She is a **versatile, dynamic actor** whose range shines through across **multiple genres and themes**. 
With experience in both school and external productions, she has successfully auditioned and been cast in several short films, including:`;

const keyRoles = [
    "🎭 **Outcast** – Played the protagonist’s friend",
    "🍳 **Execution** – Portrayed a chef",
    "💖 **Bernard** – Starred as a romantic lead",
];

const strengths = `Zainab thrives in **both comedic and dramatic roles**, showcasing talent in **horror, romance, and gripping narratives**. 
Her work in **romantic music videos** brought deep authenticity to love stories, fully embracing the emotions that relationships offer.
She also played crucial roles in **educational training scenarios** at Fanshawe College with the paramedics team, portraying:`;

const educationalRoles = [
    "🏃 **A troubled drug addict on the run**",
    "🔥 **A patient with third-degree burns needing paramedic assistance**",
    "👩‍👦 **A mother dealing with postpartum challenges**",
];

const recentPerformance = `Recently, she captivated audiences as **Queen Elizabeth I** in the play *Orlando*, demonstrating her ability 
to embody historical figures with **depth, power, and authenticity**. Zainab’s passion, dedication, and strong work ethic continue 
to propel her toward diverse and **challenging roles** that leave a lasting impression.`;

const HeroSection: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                background: "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0))",
                backgroundColor: "#fffbde",
                padding: "4rem 2rem 2rem",
                width: "100%",

            }}
        >
            {/* Left Image Section */}
            <Box
                sx={{
                    flex: 1,
                    minHeight: { xs: "300px", md: "100%" },
                    backgroundImage: "url('https://i.imgur.com/3fwQHHO.jpeg')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            />

            {/* Right Bio Section */}
            <Box
                sx={{
                    flex: 1,
                    padding: "2rem",
                    zIndex: 1,
                }}
            >
                <Typography variant="h3" fontWeight="bold">
                    {name}
                </Typography>

                <Typography variant="h6" sx={{ mt: 2, lineHeight: 1.6, textAlign: "justify", color:"#000000" }}>
                    {formatText(introduction)}
                </Typography>

                {keyRoles.map((role, index) => (
                    <Typography key={index} variant="h6">
                        {formatText(role)}
                    </Typography>
                ))}

                <Typography variant="h6" sx={{ mt: 2, lineHeight: 1.6, textAlign: "justify" }}>
                    {formatText(strengths)}
                </Typography>

                {educationalRoles.map((role, index) => (
                    <Typography key={index} variant="h6">
                        {formatText(role)}
                    </Typography>
                ))}

                <Typography variant="h6" sx={{ mt: 2, lineHeight: 1.6, textAlign: "justify" }}>
                    {formatText(recentPerformance)}
                </Typography>
            </Box>
        </Box>
    );
};

export default HeroSection;
