// utils/zipGenerator.js
import fs from "fs";
import path from "path";
import axios from "axios";
import archiver from "archiver";
import {v4 as uuidv4} from "uuid";

async function fetchGitHubProjects(username, projectLinks) {
  const results = [];

  for (const link of projectLinks) {
    try {
      const repoPath = link.replace("https://github.com/", "");
      const url = `https://api.github.com/repos/${repoPath}`;

      const res = await axios.get(url, {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`, // optional
        },
      });

      const { name, description, html_url, stargazers_count, language } = res.data;
      results.push({ name, description, url: html_url, stars: stargazers_count, language });
    } catch (err) {
      console.error("Failed to fetch project:", link, err.message);
    }
  }

  return results;
}

function generateHTML({ name, bio, socialLinks, contact, projects }) {
  const socials = Object.entries(socialLinks)
    .map(([platform, url]) => `<a href="${url}" target="_blank">${platform}</a>`)
    .join(" | ");

  const projectHTML = projects
    .map(
      (proj) => `
    <div class="project">
      <h3><a href="${proj.url}" target="_blank">${proj.name}</a></h3>
      <p>${proj.description}</p>
      <p><strong>Language:</strong> ${proj.language || "N/A"} | ⭐ ${proj.stars}</p>
    </div>
  `
    )
    .join("\n");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${name}'s Portfolio</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>${name}</h1>
    <p>${bio}</p>
    <h2>Projects</h2>
    ${projectHTML}
    <h2>Socials</h2>
    <p>${socials}</p>
    <h2>Contact</h2>
    <p>${contact}</p>
  </div>
</body>
</html>`;
}

async function generateZip({ name, bio, socialLinks, contact, projectLinks }) {
  const folderId = uuidv4();
  const tempDir = path.join(__dirname, "..", "output", folderId);
  fs.mkdirSync(tempDir, { recursive: true });

  const projects = await fetchGitHubProjects(name, projectLinks);
  const html = generateHTML({ name, bio, socialLinks, contact, projects });

  fs.writeFileSync(path.join(tempDir, "index.html"), html);

  // Add a basic style
  fs.writeFileSync(
    path.join(tempDir, "style.css"),
    `.container { font-family: sans-serif; padding: 2rem; } .project { margin-bottom: 1rem; }`
  );

  // Create ZIP
  const zipPath = path.join(tempDir, "portfolio.zip");
  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  archive.pipe(output);
  archive.file(path.join(tempDir, "index.html"), { name: "index.html" });
  archive.file(path.join(tempDir, "style.css"), { name: "style.css" });

  await archive.finalize();

  return { zipPath, folderId };
}

export default generateZip;
