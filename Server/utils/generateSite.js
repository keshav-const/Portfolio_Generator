import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

function generateSocialHTML(links) {
  return Object.entries(links)
    .map(([platform, url]) => `<a href="${url}" target="_blank">${platform}</a>`)
    .join(" | ");
}

function generateProjectsHTML(projects) {
  return projects.map(
    (project) => `
    <div class="project">
      <h3><a href="${project.url}" target="_blank">${project.name}</a></h3>
      <p>${project.description || "No description provided."}</p>
      <p><strong>Language:</strong> ${project.language || "N/A"} | ⭐ ${project.stars}</p>
    </div>`
  ).join("\n");
}

export default async function generateSite({ name, bio, projects, socialLinks, contactInfo, template = "default" }) {
  const folderId = uuidv4();
  const outputDir = path.join("output", folderId);
  fs.mkdirSync(outputDir, { recursive: true });

  const templateDir = path.join("templates", template);
  const templatePath = path.join(templateDir, "index.html");
  let templateHTML = fs.readFileSync(templatePath, "utf-8");

  templateHTML = templateHTML
    .replace("{{name}}", name)
    .replace("{{bio}}", bio)
    .replace("{{socialLinks}}", generateSocialHTML(socialLinks))
    .replace("{{contact}}", contactInfo)
    .replace("{{projects}}", generateProjectsHTML(projects));

  fs.writeFileSync(path.join(outputDir, "index.html"), templateHTML);
  fs.copyFileSync(path.join(templateDir, "style.css"), path.join(outputDir, "style.css"));

  return outputDir; // Needed for both zipping and preview
}
