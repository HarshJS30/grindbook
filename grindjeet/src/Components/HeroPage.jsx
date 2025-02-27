import { motion } from "framer-motion";
import grindjeet from "../assets/cover1.jpg";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
    const navigate = useNavigate();
    return (
        <div
            className="hero"
            style={{
                backgroundImage: `url(${grindjeet})`,
                height: "87vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                opacity: 0.9,
            }}
        >
            <motion.h1 
                initial={{ y: -50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Grind Smarter, Level Up Faster
            </motion.h1>

            <motion.h2 
                initial={{ y: -30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
                Track. Improve.<span> Conquer.</span>
            </motion.h2>

            <motion.div 
                className="buttons"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
                <motion.button 
                    className="glow-orange"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={()=>navigate('/login')}
                >
                    Get Started for free
                </motion.button>
                
                <motion.button 
                    className="cta2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Know More
                </motion.button>
            </motion.div>
        </div>
    );
}
