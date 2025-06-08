import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import generatePortfolio from "./routes/generatePortfolio.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/generate", generatePortfolio);

// Serve static previews from /output
app.use("/preview", express.static(path.join("output")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
