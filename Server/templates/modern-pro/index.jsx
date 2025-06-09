import React from "react";
import { motion } from "framer-motion";
import "daisyui/dist/full.css";

const ModernProTemplate = ({ name, title, github, projects, socials, contact }) => {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto space-y-10"
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary">{name}</h1>
          <p className="text-lg text-base-content">{title}</p>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="card bg-base-100 shadow-md"
              >
                <div className="card-body">
                  <h3 className="card-title text-primary">{proj.name}</h3>
                  <p>{proj.description}</p>
                  <div className="card-actions justify-end">
                    <a
                      href={proj.link}
                      target="_blank"
                      className="btn btn-sm btn-primary"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Socials</h2>
          <div className="flex gap-4 flex-wrap">
            {socials.map((soc, i) => (
              <a
                key={i}
                href={soc.link}
                target="_blank"
                className="btn btn-outline btn-sm"
              >
                {soc.platform}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <footer className="text-center text-sm text-base-content mt-12">
          Contact: {contact.email}
        </footer>
      </motion.div>
    </div>
  );
};

export default ModernProTemplate;
