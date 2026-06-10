const express = require("express");
const cors = require("cors");

const app = express();
const porta = 3000;

app.use(cors());

// Página inicial
app.get("/", (req, res) => {
    res.json({ mensagem: "Bem-vindo à API da Escola" });
});

// Alunos
app.get("/alunos", (req, res) => {
    res.json([
        { id: 1, nome: "Maria", idade: 18 },
        { id: 2, nome: "João", idade: 17 },
        { id: 3, nome: "Ana", idade: 19 }
    ]);
});

// Cursos
app.get("/cursos", (req, res) => {
    res.json([
        { id: 1, curso: "Desenvolvimento Web" },
        { id: 2, curso: "Banco de Dados" },
        { id: 3, curso: "JavaScript" }
    ]);
});

// Professor
app.get("/professor", (req, res) => {
    res.json({
        nome: "João",
        disciplina: "Desenvolvimento Web"
    });
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});