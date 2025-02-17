import logo from "../assets/logoo.png";
export default function Navbar(){
    return<>
        <div className="navbar">
            <div className="logo">
                <img src={logo}></img>
                <h2>GrindBook</h2>
            </div>
            <div className="anchor">
                <li>Home</li>
                <li>About</li>
                <li>My Journey</li>
                <li>Resources</li>
                <li>Contact</li>
            </div>
            <div className="cta">
                <button className="sign">Sign in</button>
                <button className="blogs">Blogs</button>
            </div>
        </div>
    </>
}