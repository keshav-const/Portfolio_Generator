// import fs from "fs";
// import path from "path";
// import { v4 as uuidv4 } from "uuid";

// function generateSocialHTML(links) {
//   return Object.entries(links)
//     .map(([platform, url]) => `<a href="${url}" target="_blank">${platform}</a>`)
//     .join(" | ");
// }

// function generateProjectsHTML(projects) {
//   return projects.map(
//     (project) => `
//     <div class="project">
//       <h3><a href="${project.url}" target="_blank">${project.name}</a></h3>
//       <p>${project.description || "No description provided."}</p>
//       <p><strong>Language:</strong> ${project.language || "N/A"} | ⭐ ${project.stars}</p>
//     </div>`
//   ).join("\n");
// }

// export default async function generateSite({ name, bio, projects, socialLinks, contactInfo, template = "default" }) {
//   const folderId = uuidv4();
//   const outputDir = path.join("output", folderId);
//   fs.mkdirSync(outputDir, { recursive: true });

//   const templateDir = path.join("templates", template);
//   const templatePath = path.join(templateDir, "index.html");
//   let templateHTML = fs.readFileSync(templatePath, "utf-8");

//   templateHTML = templateHTML
//     .replace("{{name}}", name)
//     .replace("{{bio}}", bio)
//     .replace("{{socialLinks}}", generateSocialHTML(socialLinks))
//     .replace("{{contact}}", contactInfo)
//     .replace("{{projects}}", generateProjectsHTML(projects));

//   fs.writeFileSync(path.join(outputDir, "index.html"), templateHTML);
//   fs.copyFileSync(path.join(templateDir, "style.css"), path.join(outputDir, "style.css"));

//   return outputDir; // Needed for both zipping and preview
// }
// utils/generateSite.js
// import fs from "fs";
// import path from "path";
// import { v4 as uuidv4 } from "uuid";

// function generateSocialHTML(links) {
//   return Object.entries(links)
//     .map(([platform, url]) => `<a href="${url}" target="_blank">${platform}</a>`)
//     .join(" | ");
// }

// function generateProjectsHTML(projects) {
//   return projects.map(
//     (project) => `
//     <div class="project">
//       <h3><a href="${project.url}" target="_blank">${project.name}</a></h3>
//       <p>${project.description || "No description provided."}</p>
//       <p><strong>Language:</strong> ${project.language || "N/A"} | ⭐ ${project.stars}</p>
//     </div>`
//   ).join("\n");
// }

// export default async function generateSite({
//   name,
//   bio,
//   projects,
//   socialLinks,
//   contactInfo,
//   template = "default"
// }) {
//   const folderId = uuidv4();
//   const outputDir = path.join("output", folderId);
//   fs.mkdirSync(outputDir, { recursive: true });

//   const templateDir = path.join("templates", template);
//   const templatePath = path.join(templateDir, "index.html"); // expects .html

//   if (!fs.existsSync(templatePath)) {
//     throw new Error(`Template HTML file not found for: ${template}`);
//   }

//   let templateHTML = fs.readFileSync(templatePath, "utf-8");

//   templateHTML = templateHTML
//     .replace("{{name}}", name)
//     .replace("{{bio}}", bio)
//     .replace("{{socialLinks}}", generateSocialHTML(socialLinks))
//     .replace("{{contact}}", contactInfo)
//     .replace("{{projects}}", generateProjectsHTML(projects));

//   fs.writeFileSync(path.join(outputDir, "index.html"), templateHTML);

//   // Copy CSS file if present
//   const cssPath = path.join(templateDir, "style.css");
//   if (fs.existsSync(cssPath)) {
//     fs.copyFileSync(cssPath, path.join(outputDir, "style.css"));
//   }

//   return outputDir; // important for zipping and live preview
// }
// const fs = require("fs-extra");
// const path = require("path");
// const React = require("react");
// const ReactDOMServer = require("react-dom/server");
// const babel = require("@babel/core");

// async function generateSite(userData, selectedTemplate) {
//   const templateDir = path.join(__dirname, "..", "templates", selectedTemplate);
//   const componentPath = path.join(templateDir, "index.jsx");

//   if (!fs.existsSync(componentPath)) {
//     throw new Error(`Template component not found: ${componentPath}`);
//   }

//   // Read the JSX file
//   const jsxCode = await fs.readFile(componentPath, "utf-8");

//   // Transpile JSX to JS using Babel
//   const transpiled = babel.transformSync(jsxCode, {
//     presets: ["@babel/preset-react"],
//     filename: "index.jsx",
//   });

//   // Create a fake module to evaluate the transpiled code
//   const module = { exports: {} };
//   const requireFunc = (mod) => {
//     if (mod === "react") return React;
//     return null;
//   };

//   const wrappedCode = `
//     (function(require, module, exports) {
//       ${transpiled.code}
//     })(requireFunc, module, module.exports);
//   `;
//   eval(wrappedCode); // Populate module.exports

//   const TemplateComponent = module.exports.default;

//   // Render HTML string using ReactDOMServer
//   const htmlString = ReactDOMServer.renderToStaticMarkup(
//     React.createElement(TemplateComponent, userData)
//   );

//   const finalHTML = `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>${userData.name}'s Portfolio</title>
// </head>
// <body>
//   ${htmlString}
// </body>
// </html>`;

//   // Create output directory and write index.html
//   const outputDir = path.join(__dirname, "..", "output", userData._id || "site");
//   await fs.ensureDir(outputDir);
//   await fs.writeFile(path.join(outputDir, "index.html"), finalHTML, "utf-8");

//   return outputDir;
// }

// module.exports = generateSite;
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs-extra';
import babel from '@babel/core';

const templatesPath = path.join(process.cwd(), 'templates');

const transpileJSX = async (jsxPath) => {
  const code = await fs.readFile(jsxPath, 'utf-8');
  const result = await babel.transformAsync(code, {
    presets: ['@babel/preset-react'],
    filename: 'index.jsx',
  });
  return result.code;
};

const generateSite = async (data, templateName) => {
  const templateDir = path.join(templatesPath, templateName);
  const jsxFile = path.join(templateDir, 'index.jsx');

  if (!fs.existsSync(jsxFile)) {
    throw new Error('Template JSX file not found');
  }

  const compiledCode = await transpileJSX(jsxFile);

  // Dynamically evaluate JSX as a React component
  const ComponentModule = new module.constructor();
  ComponentModule.paths = module.paths;
  ComponentModule._compile(compiledCode, 'index.jsx');
  const TemplateComponent = ComponentModule.exports.default;

  const html = ReactDOMServer.renderToStaticMarkup(
    React.createElement(TemplateComponent, data)
  );

  const fullHtml = `<!DOCTYPE html><html><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><title>${data.name}'s Portfolio</title></head><body>${html}</body></html>`;

  return fullHtml;
};

export default generateSite;
