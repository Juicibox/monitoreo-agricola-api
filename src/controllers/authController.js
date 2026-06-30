const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {

    try {

        const { correo, contrasena } = req.body;

        const usuario = await Usuario.findOne({ correo });

        if (!usuario) {

            return res.status(400).json({
                mensaje: "Correo o contraseña incorrectos"
            });

        }

        const coincide = await bcrypt.compare(
            contrasena,
            usuario.contrasena
        );

        if (!coincide) {

            return res.status(400).json({
                mensaje: "Correo o contraseña incorrectos"
            });

        }

        res.json({
            mensaje: "Inicio de sesión exitoso",
            usuario: {
                id: usuario._id,
                nombre: usuario.nombre,
                correo: usuario.correo
            }
        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

module.exports = {
    login
};