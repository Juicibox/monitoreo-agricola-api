const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");

// Crear usuario
const crearUsuario = async (req, res) => {

    try {

        const datos = { ...req.body };

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);

        datos.contrasena = await bcrypt.hash(datos.contrasena, salt);

        const usuario = await Usuario.create(datos);

        res.status(201).json(usuario);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

// Obtener todos
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// Obtener uno
const obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);

    if (!usuario) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado",
      });
    }

    res.json(usuario);

  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// Actualizar
const actualizarUsuario = async (req, res) => {
  try {

    const usuario = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!usuario) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado",
      });
    }

    res.json(usuario);

  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// Eliminar
const eliminarUsuario = async (req, res) => {

  try {

    const usuario = await Usuario.findByIdAndDelete(req.params.id);

    if (!usuario) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado",
      });
    }

    res.json({
      mensaje: "Usuario eliminado correctamente"
    });

  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }

};

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  actualizarUsuario,
  eliminarUsuario,
};