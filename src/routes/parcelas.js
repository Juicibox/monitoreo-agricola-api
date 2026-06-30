const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const validarCampos = require("../middlewares/validarCampos");

const {
    crearParcela,
    obtenerParcelas,
    obtenerParcela,
    actualizarParcela,
    eliminarParcela
} = require("../controllers/parcelaController");

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("ubicacion", "La ubicación es obligatoria").not().isEmpty(),
        check("area", "El área debe ser numérica").isNumeric(),
        check("tipoSuelo", "El tipo de suelo es obligatorio").not().isEmpty(),
        validarCampos
    ],
    crearParcela
);

router.get("/", obtenerParcelas);

router.get("/:id", obtenerParcela);

router.put("/:id", actualizarParcela);

router.delete("/:id", eliminarParcela);

module.exports = router;