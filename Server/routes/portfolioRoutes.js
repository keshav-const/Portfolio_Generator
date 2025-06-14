import express from 'express';
import generateSite from '../utils/generateSite.js';
import zipGenerator from '../utils/zipGenerator.js';
import fs from 'fs';
import path from 'path';

const router = express.Router();

const TEMP_PREVIEW_DIR = path.join(process.cwd(), 'temp_preview');

if (!fs.existsSync(TEMP_PREVIEW_DIR)) fs.mkdirSync(TEMP_PREVIEW_DIR);

// POST /api/portfolio/preview - Return rendered HTML
router.post('/preview', async (req, res) => {
  try {
    const { data, template } = req.body;
    const html = await generateSite(data, template);
    res.send(html);
  } catch (err) {
    res.status(500).json({ error: 'Preview generation failed', details: err.message });
  }
});

// POST /api/portfolio/generate - Generate ZIP
router.post('/generate', async (req, res) => {
  try {
    const { data, template } = req.body;
    const zipPath = await zipGenerator(data, template);
    res.download(zipPath, `${data.name || 'portfolio'}.zip`, () => {
      fs.unlinkSync(zipPath); // Clean up
    });
  } catch (err) {
    res.status(500).json({ error: 'Site generation failed', details: err.message });
  }
});

export default router;
