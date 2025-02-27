import { useNavigate } from "react-router-dom";
import logo from "../assets/logoo.png";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  const baseStyle = {
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease, padding 0.3s ease, border 0.3s ease",
  };

  const hoverStyle = {
    backgroundColor: "#3B82F6",
    color: "#ffffff",
    padding: "8px 12px",
    border: "1px solid #ffffff",
    borderRadius: "4px",
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="GrindBook Logo" />
          <h2>GrindBook</h2>
        </div>
        <div className="anchor">
          <li
            style={{
              ...baseStyle,
              ...(hoveredItem === "home" ? hoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredItem("home")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Home
          </li>
          <li
            style={{
              ...baseStyle,
              ...(hoveredItem === "about" ? hoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredItem("about")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            About Us
          </li>
          <li
            style={{
              ...baseStyle,
              ...(hoveredItem === "features" ? hoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredItem("features")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Features
          </li>
          <li
            style={{
              ...baseStyle,
              ...(hoveredItem === "faqs" ? hoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredItem("faqs")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            FAQs
          </li>
          <li
            style={{
              ...baseStyle,
              ...(hoveredItem === "contact" ? hoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredItem("contact")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Contact Us
          </li>
        </div>
        <div className="cta">
          <button
            className="sign"
            onClick={() => navigate("/signup")}
            style={{
              ...baseStyle,
              ...(hoveredItem === "sign" ? hoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredItem("sign")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Sign in
          </button>
          <button
            className="blogs"
            style={{
              ...baseStyle,
              ...(hoveredItem === "blogs" ? hoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredItem("blogs")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Blogs
          </button>
        </div>
      </div>
    </>
  );
}