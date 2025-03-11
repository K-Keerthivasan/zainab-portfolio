 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./frontend/Home";
 import About from "./frontend/About.tsx";
 import Gallery from "./frontend/Gallery.tsx";
 import Navbar from "./frontend/Navbar.tsx"; // Ensure the correct path
import Footer from "./frontend/Footer.tsx"
const App = () => {
    return (
        <div>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
<Footer/>

        </div>
    );
};

// Separate wrapper for the App fuctions for the routes
 export default function AppWrapper() {
     return (
         <Router>
             <App />
         </Router>
     );
 }
