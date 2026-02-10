import express from "express";
import cron from "node-cron";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("App rodando no Render!");
});

// Cron de teste: a cada minuto
cron.schedule("*/1 * * * *", async () => {
  console.log("Cron rodou:", new Date().toLocaleTimeString());
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});