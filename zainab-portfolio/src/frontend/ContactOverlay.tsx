import { useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "@emailjs/browser";


interface ContactOverlayProps {
    isOpen: boolean;
    toggleOverlay: () => void;
}

const ContactOverlay: React.FC<ContactOverlayProps> = ({ isOpen, toggleOverlay }) => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const serviceID = "portfolio-emails"; // Replace with your actual EmailJS Service ID
        const templateID = "contact-portfolio"; // Replace with your actual EmailJS Template ID
        const publicKey = "m-D-hpTHuBextyS3d"; // Replace with your actual EmailJS Public Key

        const templateParams = {
            from_email: email,
            message: message,
        };

        try {
            await emailjs.send(serviceID, templateID, templateParams, publicKey);
            setStatus("Email sent successfully!");
            setEmail(""); // Reset email field
            setMessage(""); // Reset message field
        } catch (error) {
            console.error("Failed to send email:", error);
            setStatus("Failed to send email. Please try again.");
        }
    };

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0, // Ensure it covers the full screen height
                width: "300px",
                height: "100vh",
                backgroundColor: "#1c1c2e",
                boxShadow: "-5px 0 15px rgba(0,0,0,0.2)",
                zIndex: 1300,
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                gap: "20px",
                color: "#fff",
                backdropFilter: "blur(5px)",
                transform: isOpen ? "translateX(0)" : "translateX(100%)",
                transition: "transform 0.3s ease-in-out, background-color 0.3s ease",
                "&:hover": {
                    backgroundColor: "rgb(28,28,46,0.9)",
                },
            }}
        >
            <IconButton
                onClick={toggleOverlay}
                sx={{ alignSelf: "flex-end", color: "#fff" }}
            >
                <CloseIcon />
            </IconButton>
            <Typography variant="h6" sx={{ fontFamily: "Poppins, sans-serif" }}>
                Contact me!
            </Typography>
            <form
                onSubmit={sendEmail}
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    InputProps={{
                        style: { color: "#fff" },
                    }}
                    InputLabelProps={{
                        style: { color: "#ccc" },
                    }}
                    sx={{ backgroundColor: "#2a2a3d" }}
                />
                <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    InputProps={{
                        style: { color: "#fff" },
                    }}
                    InputLabelProps={{
                        style: { color: "#ccc" },
                    }}
                    sx={{ backgroundColor: "#2a2a3d" }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: "#80ceff",
                        "&:hover": { backgroundColor: "#00c4ff" },
                    }}
                >
                    Send
                </Button>
            </form>
            {status && (
                <Typography
                    sx={{
                        color: status.includes("successfully") ? "#80ceff" : "#ff4d4f",
                        marginTop: "10px",
                    }}
                >
                    {status}
                </Typography>
            )}
        </Box>
    );
};

export default ContactOverlay;
