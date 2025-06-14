import express from "express";
import generateSite from "../utils/generateSite.js";
import fs from "fs";

const router = express.Router();

router.post("/", async (req, res) => {
  const userData = req.body;
  const template = userData.template || "default";
  const folderPath = `output/preview_${template}`;

  try {
    await generateSite(userData, template, folderPath);
    const htmlPath = `${folderPath}/index.html`;
    if (fs.existsSync(htmlPath)) {
      const htmlContent = fs.readFileSync(htmlPath, "utf8");
      res.send(htmlContent);
    } else {
      res.status(404).send("Preview not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating preview");
  }
});

export default router;
