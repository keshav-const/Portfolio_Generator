// import express from "express";

// import {fetchGitHubData} from "../utils/fetchGitHub.js"
// import generateSite from "../utils/generateSite.js";
// import zipPortfolio from "../utils/zipGenerator.js";
// const router = express.Router();
// router.post("/", async (req, res) => {
//   try {
//     const {
//       name,
//       bio,
//       githubUsername,
//       projectLinks,
//       socialLinks,
//       contactInfo,
//       template,
//     } = req.body;

//     // Step 1: Fetch GitHub data
//     const projects = await fetchGitHubData(githubUsername, projectLinks);

//     // Step 2: Generate HTML/CSS portfolio folder
//     const folderPath = await generateSite({
//       name,
//       bio,
//       projects,
//       socialLinks,
//       contactInfo,
//       template,
//     });

//     // Step 3: Zip the folder
//     const zipPath = await zipPortfolio(folderPath);

//     // Step 4: Send zip file as download
//     res.download(zipPath, "portfolio.zip");
//   } catch (error) {
//     console.error("Portfolio generation failed:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// // module.exports = router;
// import express from "express";
// import fetchGitHubData from "../utils/fetchGitHub.js";
// import generateSite from "../utils/generateSite.js";
// import zipPortfolio from "../utils/zipGenerator.js";

// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const {
//       name,
//       bio,
//       githubUsername,
//       projectLinks,
//       socialLinks,
//       contactInfo,
//       template,
//     } = req.body;

//     const projects = await fetchGitHubData(githubUsername, projectLinks);
//     const folderPath = await generateSite({
//       name,
//       bio,
//       projects,
//       socialLinks,
//       contactInfo,
//       template,
//     });
//     const zipPath = await zipPortfolio(folderPath);
//     res.download(zipPath, "portfolio.zip");
//   } catch (error) {
//     console.error("Portfolio generation failed:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// export default router;
import express from "express";
import fs from "fs";
import path from "path";
import generateSite from "../utils/generateSite.js";
import zipGenerator from "../utils/zipGenerator.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const userData = req.body;
  const template = userData.template || "default";
  const folderPath = `output/${Date.now()}_${template}`;

  try {
    await generateSite(userData, template, folderPath);
    const zipPath = await zipGenerator(folderPath);
    res.download(zipPath);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate portfolio" });
  }
});

export default router;
