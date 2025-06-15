import React from "react";

const DarkModeTemplate = ({
  name = "Jane Doe",
  title = "Software Developer",
  github = "https://github.com/",
  projects = [],
  socials = [],
  contact = { email: "jane@example.com" },
}) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 font-sans">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-lg text-gray-400">{title}</p>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl border-b border-gray-700 pb-2 mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold">{proj.name}</h3>
              <p className="text-sm text-gray-400">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                className="text-blue-400 hover:underline text-sm mt-2 inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl border-b border-gray-700 pb-2 mb-4">Socials</h2>
        <div className="flex flex-wrap gap-3">
          {socials.map((soc, i) => (
            <a
              key={i}
              href={soc.link}
              target="_blank"
              className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm hover:bg-gray-600"
            >
              {soc.platform}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        Contact me at:{" "}
        <a href={`mailto:${contact.email}`} className="text-blue-400 hover:underline">
          {contact.email}
        </a>
      </div>
    </div>
  );
};

export default DarkModeTemplate;
