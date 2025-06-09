import React from "react";
import { motion } from "framer-motion";
import "./terminal-style.css"; // Optional extra styling

const DevFolioTemplate = ({ name, title, github, projects, socials, contact }) => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Header Terminal Block */}
        <div className="bg-[#111] p-6 rounded shadow-lg border border-green-500">
          <p className="text-xl">
            <span className="text-green-600">user@portfolio:</span>~${" "}
            <span className="text-white">whoami</span>
          </p>
          <p className="pl-6">{name} — {title}</p>
        </div>

        {/* Projects */}
        <div className="bg-[#111] p-6 rounded shadow-lg border border-green-500">
          <p className="text-xl">
            <span className="text-green-600">user@portfolio:</span>~${" "}
            <span className="text-white">cat projects.txt</span>
          </p>
          <ul className="pl-6 mt-2 list-disc space-y-2">
            {projects.map((proj, i) => (
              <li key={i}>
                <a
                  href={proj.link}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  {proj.name}
                </a>{" "}
                — <span className="text-gray-300">{proj.description}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="bg-[#111] p-6 rounded shadow-lg border border-green-500">
          <p className="text-xl">
            <span className="text-green-600">user@portfolio:</span>~${" "}
            <span className="text-white">open socials.txt</span>
          </p>
          <div className="pl-6 mt-2 flex flex-wrap gap-4">
            {socials.map((soc, i) => (
              <a
                key={i}
                href={soc.link}
                target="_blank"
                className="underline text-blue-400 hover:text-blue-300"
              >
                {soc.platform}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-[#111] p-6 rounded shadow-lg border border-green-500">
          <p className="text-xl">
            <span className="text-green-600">user@portfolio:</span>~${" "}
            <span className="text-white">echo contact</span>
          </p>
          <p className="pl-6 mt-2">{contact.email}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default DevFolioTemplate;
