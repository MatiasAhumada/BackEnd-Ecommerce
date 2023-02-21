import { validationResult } from "express-validator";
import Usuario from "../models/usuario";

export const listarUsuarios = async (req, res) =>{
  try {
    const listaUsuarios = await Usuario.find();
    res.status(200).json(listaUsuarios)
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message :"Error al buscar usuarios"
    })
  }
}
export const crearUsuario = async(req, res) =>{
    try {
      const errores = validationResult(req)
      if(!errores.isEmpty()){
        return res.status(400).json({
          errores: errores.array()
        })
      }
      const {email} = req.body;

      let usuario = await Usuario.findOne({email});
      if(usuario){
        return res.status(400).json({
          message: "Ya existe un usuario con el correo enviado"
        })
      }
        usuario = new Usuario(req.body);
        
        await usuario.save();
        res.status(201).json({
            message: "El usuario fue creado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            message:"Error al crear un usuario"
        })
    }
}
export const obtenerUsuario= async (req, res) => {
    try {
     
      const usuarioBuscado = await Usuario.findById(req.params.id);
      res.status(200).json(usuarioBuscado);
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Error no se pudo encontrar el usuario solicitado",
      });
    }
  };
export const editarUsuario = async (req, res) => {
    try {
      await Usuario.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        mensaje: "El usuario fue editado correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Error el usuario solicitado no pudo ser modificado",
      });
    }
  };

export const borrarUsuario = async (req, res) => {
    try {
      await Usuario.findByIdAndDelete(req.params.id);
      res.status(200).json({
        mensaje: "El usuario fue  correctamente eliminado",
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Error el usuario solicitado no pudo ser eliminado",
      });
    }
  };