// routes/download.js
import express from "express";
import path from "path";
import fs from "fs";

const router = express.Router();

router.get("/:folderId", (req, res) => {
  const zipPath = path.join("output", `${req.params.folderId}.zip`);
  if (!fs.existsSync(zipPath)) return res.status(404).send("File not found");
  res.download(zipPath);
});

export default router;
