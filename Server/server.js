import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import portfolioRoutes from "./routes/portfolioRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Routes for preview and generation
app.use("/api/portfolio", portfolioRoutes);

// Serve generated static previews
const __dirname = path.resolve();
app.use("/preview", express.static(path.join(__dirname, "output")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
