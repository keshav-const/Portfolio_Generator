import React from "react";
import { motion } from "framer-motion";
import "./style.css"; // Assume Tailwind or custom CSS

const DefaultTemplate = ({ name, title, github, projects, socials, contact }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-lg text-gray-700">{title}</p>
      </motion.header>

      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-3">Projects</h2>
        <ul className="space-y-2">
          {projects.map((proj, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-4 rounded shadow"
            >
              <a href={proj.link} target="_blank" className="font-bold text-blue-600">
                {proj.name}
              </a>
              <p>{proj.description}</p>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-3">Socials</h2>
        <div className="flex gap-4">
          {socials.map((soc, i) => (
            <motion.a
              key={i}
              href={soc.link}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="text-blue-500"
            >
              {soc.platform}
            </motion.a>
          ))}
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-sm text-gray-500 mt-12"
      >
        Contact: {contact.email}
      </motion.footer>
    </div>
  );
};

export default DefaultTemplate;