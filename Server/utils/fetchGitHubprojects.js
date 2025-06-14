// utils/fetchGitHubProjects.js
import axios from "axios";

export default async function fetchGitHubProjects(username, projectLinks) {
  const results = [];

  for (const link of projectLinks) {
    try {
      const repoPath = link.replace("https://github.com/", "");
      const url = `https://api.github.com/repos/${repoPath}`;
      const res = await axios.get(url, {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN || ""}`, // optional
        },
      });
      const { name, description, html_url, stargazers_count, language } = res.data;
      results.push({ name, description, link: html_url, stars: stargazers_count, language });
    } catch (err) {
      console.error("Failed to fetch project:", link, err.message);
    }
  }

  return results;
}
