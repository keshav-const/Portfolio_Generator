import React from "react";
import { motion } from "framer-motion";
import "./style.css"; // Keep your original dark mode styles

const DarkModeTemplate = ({
  name = "",
  title = "",
  github = "",
  projects = [],
  socials = [],
  contact = {},
}) => {
  return (
    <>
    <style>
        {`
          @font-face {
            font-family: 'Inter';
            src: url('./fonts/Inter-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }

          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
    <div className="min-h-screen bg-[#121212] text-white font-sans px-6 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto space-y-14"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-indigo-400">{name}</h1>
          <p className="text-lg text-gray-300">{title}</p>
        </motion.div>

        {/* Projects */}
        <motion.section
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-indigo-300">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-[#1e1e1e] p-5 rounded shadow hover:shadow-indigo-500/30 transition-shadow"
              >
                <a
                  href={proj?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-indigo-400 hover:underline"
                >
                  {proj?.name}
                </a>
                <p className="text-sm text-gray-400 mt-1">{proj?.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Social Links */}
        <motion.section
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-indigo-300">Social Links</h2>
          <div className="flex flex-wrap gap-4">
            {socials.map((soc, i) => (
              <a
                key={i}
                href={soc?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline hover:text-indigo-300 transition-colors"
              >
                {soc?.platform}
              </a>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-gray-500 text-sm"
        >
          Contact: {contact?.email}
        </motion.footer>
      </motion.div>
    </div>
    </>
  );
};

export default DarkModeTemplate;
