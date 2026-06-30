const express = require("express");
const { check } = require("express-validator");
const validarCampos = require("../middlewares/validarCampos");
const router = express.Router();

const {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario
} = require("../controllers/usuarioController");


router.post(
    "/",

    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),

        check("correo", "Debe ingresar un correo válido").isEmail(),

        check("contrasena", "La contraseña debe tener mínimo 6 caracteres")
            .isLength({ min: 6 }),

        check("ubicacion", "La ubicación es obligatoria").not().isEmpty(),

        validarCampos
    ],

    crearUsuario
);


router.get("/", obtenerUsuarios);

router.get("/:id", obtenerUsuario);

router.put("/:id", actualizarUsuario);

router.delete("/:id", eliminarUsuario);

module.exports = router;