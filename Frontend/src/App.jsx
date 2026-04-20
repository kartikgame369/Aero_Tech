import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import DiseaseDetection from './pages/DiseaseDetection';
import Auth from './pages/Auth';

 
function App() {
  return(
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/auth" element={<Auth />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/services/disease-detection" element={<DiseaseDetection />}/>
      <Route path="/team" element={<Team />}/>
      <Route path="/testimonials" element={<Testimonials />}/>
      <Route path="/blog" element={<Blog />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;