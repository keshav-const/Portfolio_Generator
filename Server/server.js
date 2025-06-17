// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import downloadRoute from "./routes/download.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Base API routes
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/download", downloadRoute);

// Serve static preview files
const __dirname = path.resolve();
app.use("/preview", express.static(path.join(__dirname, "output")));

// Default route (optional)
app.get("/", (req, res) => {
  res.send("🌐 Portfolio Generator Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
