// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import portfolioRouter from "./routes/generatePortfolio.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/generate", portfolioRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
