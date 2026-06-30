const mongoose = require("mongoose");

const cultivoSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },

        tipo: {
            type: String,
            required: true
        },

        fechaSiembra: {
            type: Date,
            required: true
        },

        estado: {
            type: String,
            enum: ["Sembrado", "Crecimiento", "Cosechado"],
            default: "Sembrado"
        },

        parcela: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Parcela",
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Cultivo", cultivoSchema);