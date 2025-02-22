import React from "react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <>
      <div className="features">
        <div className="f1">
          <h1> Why Choose</h1>
          <h1><span>GrindBook</span></h1>
        </div>

        <div className="cards">
          <div className="row-1">
            <motion.div
              className="card-1 c"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
            >
              <div className="subheading"><h3>Revise Effectively</h3></div>
              <div className="feat"><p>Revise effectively with help of questions, correct answers, and what you learned from that question at one place with GrindBook.</p></div>
            </motion.div>

            <motion.div
              className="card-2"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <div className="subheading"><h3>Save Questions</h3></div>
              <div className="feat"><p>Easily save direct links to questions or problems from any platform. Keep all your references organized in one place for quick access and review.</p></div>
            </motion.div>

            <motion.div
              className="card-3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              <div className="subheading"><h3>Track your Progress</h3></div>
              <div className="feat"><p>Document key takeaways and lessons learned from each question. Reflect on your problem-solving approaches and track your growth over time.</p></div>
            </motion.div>
          </div>

          <div className="row-2">
            <motion.div
              className="card-4"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <div className="subheading"><h3>Revise By Topics</h3></div>
              <div className="feat"><p>Categorize questions by topics or subjects for easy filtering and searching. Build a personal knowledge map to visualize your expertise.</p></div>
            </motion.div>

            <motion.div
              className="card-5"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <div className="subheading"><h3>Smart Notes</h3></div>
              <div className="feat"><p>Add flexible notes to each question, including solutions, explanations, and custom tags. Set reminders to revisit important concepts.</p></div>
            </motion.div>

            <motion.div
              className="card-6"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false }}
            >
              <div className="subheading"><h3>Search and Filter</h3></div>
              <div className="feat"><p>Quickly find questions and notes using advanced search and filtering options. Sort by topic to focus on what matters most.</p></div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
