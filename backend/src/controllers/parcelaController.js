const Parcela = require("../models/Parcela");

// Crear
const crearParcela = async (req, res) => {

    try {

        const parcela = await Parcela.create(req.body);

        res.status(201).json(parcela);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

// Obtener todas
const obtenerParcelas = async (req, res) => {

    try {

        const parcelas = await Parcela.find();

        res.json(parcelas);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

// Obtener una
const obtenerParcela = async (req, res) => {

    try {

        const parcela = await Parcela.findById(req.params.id);

        if (!parcela) {
            return res.status(404).json({
                mensaje: "Parcela no encontrada"
            });
        }

        res.json(parcela);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

// Actualizar
const actualizarParcela = async (req, res) => {

    try {

        const parcela = await Parcela.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!parcela) {

            return res.status(404).json({
                mensaje: "Parcela no encontrada"
            });

        }

        res.json(parcela);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

// Eliminar
const eliminarParcela = async (req, res) => {

    try {

        const parcela = await Parcela.findByIdAndDelete(req.params.id);

        if (!parcela) {

            return res.status(404).json({
                mensaje: "Parcela no encontrada"
            });

        }

        res.json({
            mensaje: "Parcela eliminada correctamente"
        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

module.exports = {
    crearParcela,
    obtenerParcelas,
    obtenerParcela,
    actualizarParcela,
    eliminarParcela
};