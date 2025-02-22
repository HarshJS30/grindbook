import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="ok">
            <motion.div 
                className="contacts"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="name">
                    <h1>GrindBook</h1>
                </div>
                <div className="group">
                    <motion.div 
                        className="bars"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3, staggerChildren: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.h6 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>Home</motion.h6>
                        <motion.h6 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>About</motion.h6>
                        <motion.h6 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.6 }}>Features</motion.h6>
                        <motion.h6 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.7 }}>Contact</motion.h6>
                    </motion.div>
                    <motion.div 
                        className="bars"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3, staggerChildren: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.h6 initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>Twitter</motion.h6>
                        <motion.h6 initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>Instagram</motion.h6>
                        <motion.h6 initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.6 }}>Portfolio</motion.h6>
                        <motion.h6 initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.7 }}>Mail</motion.h6>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
