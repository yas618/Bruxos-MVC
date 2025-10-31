import express from "express";
import dotenv from "dotenv";
import BruxosRoutes from "./src/routes/BruxosRoutes.js";
import AnimaisRoutes from "./src/routes/AnimaisRoutes.js";
import PocoesRoutes from "./src/routes/PocoesRoutes.js";

const app = express();

app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando...");
});

app.use('/bruxos', BruxosRoutes);
app.use('/animais', AnimaisRoutes);
app.use('/pocoes', PocoesRoutes);   

app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} 🚀`);
});