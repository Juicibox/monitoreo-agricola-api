const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const validarCampos = require("../middlewares/validarCampos");

const {
    crearCultivo,
    obtenerCultivos,
    obtenerCultivo,
    actualizarCultivo,
    eliminarCultivo
} = require("../controllers/cultivoController");

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("tipo", "El tipo es obligatorio").not().isEmpty(),
        check("fechaSiembra", "La fecha es obligatoria").not().isEmpty(),
        check("parcela", "La parcela es obligatoria").not().isEmpty(),
        validarCampos
    ],
    crearCultivo
);

router.get("/", obtenerCultivos);

router.get("/:id", obtenerCultivo);

router.put("/:id", actualizarCultivo);

router.delete("/:id", eliminarCultivo);

module.exports = router;