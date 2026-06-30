const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rutasUsuarios = require("./routes/usuarios");
const app = express();
const rutasParcelas = require("./routes/parcelas");
const rutasCultivos = require("./routes/cultivos");
const rutasAuth = require("./routes/auth");

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/usuarios", rutasUsuarios);
app.use("/api/parcelas", rutasParcelas);
app.use("/api/cultivos", rutasCultivos);
app.use("/api/auth", rutasAuth);

// Ruta de prueba
app.get("/", (req, res) => {
    res.json({
        mensaje: "API Monitoreo Agrícola funcionando correctamente"
    });
});

module.exports = app;