// import React from "react";
// import { motion } from "framer-motion";
// import "./style.css"; // Assume Tailwind or custom CSS

// const DefaultTemplate = ({ name, title, github, projects, socials, contact }) => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <motion.header
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-10"
//       >
//         <h1 className="text-4xl font-bold">{name}</h1>
//         <p className="text-lg text-gray-700">{title}</p>
//       </motion.header>

//       <motion.section
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7 }}
//         className="mb-8"
//       >
//         <h2 className="text-2xl font-semibold mb-3">Projects</h2>
//         <ul className="space-y-2">
//           {projects.map((proj, i) => (
//             <motion.li
//               key={i}
//               whileHover={{ scale: 1.02 }}
//               className="bg-white p-4 rounded shadow"
//             >
//               <a href={proj.link} target="_blank" className="font-bold text-blue-600">
//                 {proj.name}
//               </a>
//               <p>{proj.description}</p>
//             </motion.li>
//           ))}
//         </ul>
//       </motion.section>

//       <motion.section
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7 }}
//         className="mb-8"
//       >
//         <h2 className="text-2xl font-semibold mb-3">Socials</h2>
//         <div className="flex gap-4">
//           {socials.map((soc, i) => (
//             <motion.a
//               key={i}
//               href={soc.link}
//               target="_blank"
//               whileHover={{ scale: 1.1 }}
//               className="text-blue-500"
//             >
//               {soc.platform}
//             </motion.a>
//           ))}
//         </div>
//       </motion.section>

//       <motion.footer
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="text-center text-sm text-gray-500 mt-12"
//       >
//         Contact: {contact.email}
//       </motion.footer>
//     </div>
//   );
// };

// export default DefaultTemplate;
// import React from "react";
// import { motion } from "framer-motion";
// import "./style.css";

// const DefaultTemplate = ({
//   name = "Your Name",
//   title = "Your Title",
//   github = "https://github.com/",
//   projects = [],
//   socials = [],
//   contact = { email: "example@example.com" },
// }) => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <motion.header
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-10"
//       >
//         <h1 className="text-4xl font-bold">{name}</h1>
//         <p className="text-lg text-gray-700">{title}</p>
//       </motion.header>

//       <motion.section
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7 }}
//         className="mb-8"
//       >
//         <h2 className="text-2xl font-semibold mb-3">Projects</h2>
//         <ul className="space-y-2">
//           {(projects || []).map((proj, i) => (
//             <motion.li
//               key={i}
//               whileHover={{ scale: 1.02 }}
//               className="bg-white p-4 rounded shadow"
//             >
//               <a
//                 href={proj.link || "#"}
//                 target="_blank"
//                 className="font-bold text-blue-600"
//                 rel="noreferrer"
//               >
//                 {proj.name || `Project ${i + 1}`}
//               </a>
//               <p>{proj.description || "No description provided."}</p>
//             </motion.li>
//           ))}
//         </ul>
//       </motion.section>

//       <motion.section
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7 }}
//         className="mb-8"
//       >
//         <h2 className="text-2xl font-semibold mb-3">Socials</h2>
//         <div className="flex gap-4 flex-wrap">
//           {(socials || []).map((soc, i) => (
//             <motion.a
//               key={i}
//               href={soc.link || "#"}
//               target="_blank"
//               whileHover={{ scale: 1.1 }}
//               className="text-blue-500"
//               rel="noreferrer"
//             >
//               {soc.platform || "Social"}
//             </motion.a>
//           ))}
//         </div>
//       </motion.section>

//       <motion.footer
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="text-center text-sm text-gray-500 mt-12"
//       >
//         Contact: {contact?.email || "example@example.com"}
//       </motion.footer>
//     </div>
//   );
// };

// export default DefaultTemplate;
import React from "react";
import { motion } from "framer-motion";
import "./style.css"; // Keep your existing styles if any

const DefaultTemplate = ({
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

    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans px-6 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto space-y-14"
      >
        {/* Header */}
        <motion.header
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-blue-600">{name}</h1>
          <p className="text-lg text-gray-600">{title}</p>
        </motion.header>

        {/* Projects */}
        <motion.section
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-5 border border-gray-200 rounded shadow hover:shadow-blue-200 transition-shadow"
              >
                <a
                  href={proj?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-blue-600 hover:underline"
                >
                  {proj?.name}
                </a>
                <p className="text-sm text-gray-700 mt-1">{proj?.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Social Links */}
        <motion.section
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Socials</h2>
          <div className="flex flex-wrap gap-4">
            {socials.map((soc, i) => (
              <a
                key={i}
                href={soc?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-400 transition-colors"
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
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm"
        >
          Contact: {contact?.email}
        </motion.footer>
      </motion.div>
    </div>
    </>
  );
};

export default DefaultTemplate;
