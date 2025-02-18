import  Navbar  from "./Components/Navbar";
import './App.css';
import MainPage from "./Components/HeroPage";
import About from "./Components/AboutPage";
import Features from "./Components/Features";

function App() {
    return (
        <>
            <Navbar />
            <MainPage />
            <About />
            <Features />
        </>
    );
}

export default App;
