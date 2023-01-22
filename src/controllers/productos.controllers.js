import { validationResult } from "express-validator";
import Producto from "../models/producto";


export const listarProductos = async(req, res)=>{
  try {
    const listaProductos = await Producto.find();
    res.status(200).json(listaProductos)
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar buscar los productos"
    })
  }
}

export const crearProducto = async (req, res) => {
  try {
    const errores = validationResult(req);
    if(!errores.isEmpty()){
      return res.status(400).json({
        errores: errores.array()
      })
    }
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json({
      message: "El producto se creo correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al crear el producto",
    });
  }
};

export const editarProducto = async (req, res) => {
    try {
      await Producto.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        mensaje: "El producto fue editado correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Error el prudcto solicitado no pudo ser modificado",
      });
    }
  };

  export const borrarProducto = async (req, res) =>{
    try {
    await Producto.findByIdAndDelete(req.params.id)
    res.status(200).json({
        mensaje: 'El producto fue correctamente eliminado'
    });
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: 'Error. El producto solicitado no pudo ser eliminado.'
        });
    }
};


export const obtenerProducto = async(req, res)=>{
  
  try {
    console.log(req.params)
    const productoBuscado = await Producto.findById(req.params.id);
    res.status(200).json(productoBuscado);

  } catch (error) {
    res.status(404).json({
      mensaje:'Error no encontramos el producto solicitado'
    })
  }

}