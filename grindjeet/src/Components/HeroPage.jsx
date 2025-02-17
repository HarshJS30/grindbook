import grindjeet from "../assets/cover1.jpg";
export default function MainPage(){
    return<div>
        <div
            className="hero"
            style={{
                backgroundImage: `url(${grindjeet})`,
                height: "87vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                opacity: 0.9,
            }}>
            <h1>Grind Smarter, Level Up faster</h1>
            <h2>Track. Improve.<span> Conquer.</span></h2>
            <div className="buttons">
                <button className="glow-orange">Get Started for free</button>
                <button className="cta2">Know More</button>
            </div>
        </div>
    </div>
}