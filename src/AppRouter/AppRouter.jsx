import React from 'react'
import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from '../pages/LandingPage/LandingPage';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Contact from"../pages/Contact/Contact";
import ArtWorks from "../pages/ArtWorks/ArtWorks";
import Skills from "../pages/Skills/Skills";
import Biography from "../pages/Biography/Biography";
import MovieApp from "../pages/Skills/MovieApp/MovieApp"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ArtWorks" element={<ArtWorks />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Skills/MovieApp" element={<MovieApp />} />
        <Route path="/Biography" element={<Biography />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
