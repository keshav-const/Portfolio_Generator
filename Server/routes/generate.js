// routes/generate.js
import express from "express";
import path from "path";
import {generateZip} from "../utils/zipGenerator.js"
import fetchGitHubProjects from "../utils/fetchGitHubprojects.js"
const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const { name, bio, socialLinks, contact, projectLinks } = req.body;

    const { zipPath, folderId } = await generateZip({
      name,
      bio,
      socialLinks,
      contact,
      projectLinks,
    });

    res.download(zipPath, "portfolio.zip", () => {
      console.log("✅ Sent zip for:", name);
    });
  } catch (err) {
    console.error("Error generating portfolio:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
