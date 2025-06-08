// utils/fetchGitHub.js
import axios from "axios";

async function fetchGitHubData(username, projectLinks) {
  const results = [];

  for (const link of projectLinks) {
    try {
      const repoPath = link.replace("https://github.com/", "");
      const repoUrl = `https://api.github.com/repos/${repoPath}`;

      const res = await axios.get(repoUrl, {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`, // Optional
        },
      });

      const { name, description, html_url, stargazers_count, language } = res.data;

      results.push({
        name,
        description: description || "No description provided.",
        url: html_url,
        stars: stargazers_count || 0,
        language: language || "N/A",
      });
    } catch (err) {
      console.error("❌ Failed to fetch repo:", link, err.message);
    }
  }

  return results;
}

export default fetchGitHubData;

//utils/fetchGitHub.js

// const axios = require("axios");

// /**
//  * Fetch data for multiple GitHub repositories.
//  *
//  * @param {string} username - GitHub username (optional for logging, not used in fetching).
//  * @param {string[]} projectLinks - Array of GitHub repository URLs.
//  * @returns {Promise<Object[]>} - Array of project metadata.
//  */
// async function fetchGitHubData(username, projectLinks) {
//   const results = [];

//   for (const link of projectLinks) {
//     try {
//       // Extract the repo path from the GitHub URL
//       const repoPath = link.replace("https://github.com/", "");
//       const repoUrl = `https://api.github.com/repos/${repoPath}`;

//       const res = await axios.get(repoUrl, {
//         headers: {
//           // Optional GitHub token for higher rate limits
//           Authorization: `token ${process.env.GITHUB_TOKEN}`, 
//         },
//       });

//       const { name, description, html_url, stargazers_count, language } = res.data;

//       results.push({
//         name,
//         description: description || "No description provided.",
//         url: html_url,
//         stars: stargazers_count || 0,
//         language: language || "N/A",
//       });
//     } catch (err) {
//       console.error(`❌ Failed to fetch: ${link} →`, err.response?.data?.message || err.message);
//     }
//   }

//   return results;
// }

// module.exports = fetchGitHubData;
