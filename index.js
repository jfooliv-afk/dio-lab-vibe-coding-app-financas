
import express from "express";
import cron from "node-cron";   // não esqueça de instalar: npm install node-cron

const app = express();
const PORT = process.env.PORT || 3000;

// Rota simples para teste
app.get("/",—
