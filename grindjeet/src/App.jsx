import  Navbar  from "./Components/Navbar";
import './App.css';
import MainPage from "./Components/HeroPage";
import About from "./Components/AboutPage";
import Features from "./Components/Features";
import Contact from "./Components/Contact";

function App() {
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

export default App;
