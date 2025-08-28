import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());


// Rota raiz para mostrar que a API está funcionando
app.get("/", (req, res) => {
  res.json({
    message: "API de Usuários funcionando!",
    endpoints: {
      "GET /": "Esta mensagem",
      "GET /usuarios": "Listar todos os usuários",
      "POST /usuarios": "Criar novo usuário",
      "PUT /usuarios/:id": "Atualizar usuário",
      "DELETE /usuarios/:id": "Deletar usuário",
    },
  });
});

app.post("/usuarios", async (req, res) => {
  try {
    console.log("📥 Dados recebidos no backend:", req.body); // 👈 log para debug
    const user = await prisma.user.create({ data: req.body });
    res.status(201).json(user);
  } catch (error) {
    console.error("❌ Erro ao criar usuário:", error);
    res.status(400).json({ error: "Erro ao criar usuário", details: error.message });
  }
});

app.get("/usuarios", async (req, res) => {
  try {
    const where = {};
    if (req.query.name) where.name = req.query.name;
    if (req.query.email) where.email = req.query.email;
    if (req.query.age) where.age = Number(req.query.age);
    const users = await prisma.user.findMany({ where });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

app.put("/usuarios/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar usuário" });
  }
});

app.delete("/usuarios/:id", async (req, res) => {
  try {
    const deletedUser = await prisma.user.delete({
      where: { id: req.params.id },
    });
    res.status(200).json({ message: "Usuário deletado com sucesso", user: deletedUser });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar o usuário" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

/* Criar api de usuarios 
    criar usuario
   listar usuarios
   listar usuario
   deletar usuario


   usuario:isaacisaacdevcontato08
   senha:L8xjCux8c8mxxvDZsarah2909
  isaac
   J2lVCGikyeSH4N88
*/
