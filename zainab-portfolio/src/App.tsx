import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Navbar from "./frontend/Navbar.tsx"
import Footer_Promo from "./frontend/Footer_Promo.tsx";
import FooterRegular from "./frontend/Footer_Regular.tsx";
import Home from "./frontend/Home/Home.tsx";
import Gallery from "./frontend/Gallery.tsx";


const App: React.FC = () => {

  return (
 <div>

     <Router>
         <Navbar/>

         <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>

         </Routes>

         <FooterRegular/>
         <Footer_Promo/>

     </Router>



 </div>
  )
}

export default App
