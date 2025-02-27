import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import photo from "../assets/about.jpg";
import { useNavigate } from "react-router-dom";

export default function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "0.7 1"] });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const x = useTransform(scrollYProgress, [0, 1], [-100, 0]); 
    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
    const navigate = useNavigate();

    return (
        <div className="about" ref={ref}>
            <motion.div className="aboutcontent" style={{ opacity, x }}>
                <motion.h1 style={{ opacity, y }}>Ace Your Placements</motion.h1>
                <motion.h1 className="strategy" style={{ opacity, y }}>Through Strategic</motion.h1>
                <motion.h1 style={{ opacity, y }}><span>Revision.</span></motion.h1>

                <motion.p style={{ opacity, y }}>
                    GrindBook makes strategic revision easy. Log your learning materials,<br />
                    track your progress, and identify areas needing focus to confidently <br />
                    tackle placement challenges and achieve success.
                </motion.p>

                <motion.div className="buttons1" style={{ opacity, y }}>
                    <motion.button className="log" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={()=>navigate('/login')}>
                        Start Logging
                    </motion.button>
                    <motion.button className="rev" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        See 
                    </motion.button>
                </motion.div>
            </motion.div>

            <motion.img src={photo} style={{ opacity, x: useTransform(scrollYProgress, [0, 1], [100, 0]) }} />
        </div>
    );
}
