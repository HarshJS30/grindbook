import { useNavigate } from "react-router-dom";
import logo from "../assets/logoo.png";
export default function Navbar(){
    const navigate = useNavigate();
    return<>
        <div className="navbar">
            <div className="logo">
                <img src={logo}></img>
                <h2>GrindBook</h2>
            </div>
            <div className="anchor">
                <li>Home</li>
                <li>About Us</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
            </div>
            <div className="cta">
                <button className="sign" onClick={()=>navigate('signup')}>Sign in</button>
                <button className="blogs">Blogs</button>
            </div>
        </div>
    </>
}