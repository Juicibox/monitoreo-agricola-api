const Cultivo = require("../models/Cultivo");

// Crear
const crearCultivo = async (req, res) => {

    try {

        const cultivo = await Cultivo.create(req.body);

        res.status(201).json(cultivo);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

// Obtener todos
const obtenerCultivos = async (req, res) => {

    try {

        const cultivos = await Cultivo.find()
            .populate("parcela");

        res.json(cultivos);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

// Obtener uno
const obtenerCultivo = async (req, res) => {

    try {

        const cultivo = await Cultivo.findById(req.params.id)
            .populate("parcela");

        if (!cultivo) {

            return res.status(404).json({
                mensaje: "Cultivo no encontrado"
            });

        }

        res.json(cultivo);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

// Actualizar
const actualizarCultivo = async (req, res) => {

    try {

        const cultivo = await Cultivo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!cultivo) {

            return res.status(404).json({
                mensaje: "Cultivo no encontrado"
            });

        }

        res.json(cultivo);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

// Eliminar
const eliminarCultivo = async (req, res) => {

    try {

        const cultivo = await Cultivo.findByIdAndDelete(req.params.id);

        if (!cultivo) {

            return res.status(404).json({
                mensaje: "Cultivo no encontrado"
            });

        }

        res.json({
            mensaje: "Cultivo eliminado correctamente"
        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

module.exports = {
    crearCultivo,
    obtenerCultivos,
    obtenerCultivo,
    actualizarCultivo,
    eliminarCultivo
};