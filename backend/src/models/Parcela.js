const mongoose = require("mongoose");

const parcelaSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },

        ubicacion: {
            type: String,
            required: true
        },

        area: {
            type: Number,
            required: true
        },

        tipoSuelo: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Parcela", parcelaSchema);