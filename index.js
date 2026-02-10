
import express from "express";
import cron from "node-cron";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Rota principal
app.get("/", (req, res) => {
  res.send("App rodando no Render!");
});

// Nova rota de gastos
app.get("/gastos", (req, res) => {
  res.json([
    { descricao: "Mercado", valor: 120, categoria: "alimentação" },
    { descricao: "Uber", valor: 35, categoria: "transporte" },
    { descricao: "Aluguel", valor: 950, categoria: "moradia" }
  ]);
});

// Cron de teste: a cada minuto
cron.schedule("*/1 * * * *", async () => {
  console.log("Cron rodou:", new Date().toLocaleTimeString());
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
