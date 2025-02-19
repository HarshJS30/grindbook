import React from 'react';
import MainPage from "./HeroPage";
import About from "./AboutPage";
import Features from "./Features";
import Contact from "./Contact";
import Navbar from "./Navbar";

function HomePageContent() {
  return (
    <> 
        <Navbar />
        <MainPage />
        <About />
        <Features />
        <Contact />
    </>
  );
}

export default HomePageContent;