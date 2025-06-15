import React from "react";
import { motion } from "framer-motion";
import "./style.css"; // Optional: Add additional styling if needed

const MinimalistTemplate = ({
  name = "",
  title = "",
  github = "",
  projects = [],
  socials = [],
  contact = {},
}) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-lg text-gray-600">{title}</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-1">Projects</h2>
          <div className="space-y-4">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-4 border rounded-md shadow-sm"
              >
                <a
                  href={proj?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-blue-600"
                >
                  {proj?.name}
                </a>
                <p className="text-sm text-gray-700">{proj?.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-1">Social Links</h2>
          <div className="flex flex-wrap gap-4">
            {socials.map((soc, i) => (
              <a
                key={i}
                href={soc?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {soc?.platform}
              </a>
            ))}
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-12">
          Contact: {contact?.email}
        </footer>
      </motion.div>
    </div>
  );
};

export default MinimalistTemplate;
