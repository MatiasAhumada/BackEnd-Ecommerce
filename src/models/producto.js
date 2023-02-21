import mongoose, { Schema } from "mongoose";
const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 50,
  },
  marca: {
    type: String,
    required: true,
  },

  precio: {
    type: Number,
    required: true,
    minLength: 1,
    maxLength: 1000000,
  },
  
  
  imagen: {
    type: String,
    required: true,
    value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
  },
  pantalla: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 5000,
  },
  procesador: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 5000,
  },
  android: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 5000,
  },
  interna: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 5000,
  },
  expandible: {
   
      type: String,
      required: true,
    
  },
  ram: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 5000,
  },
  camara: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 5000,
  },
  
  
  liberado: {
    type: String,
    required: true,
  },
  resena: {
    type: String,
    required: true,
    minLength: 100,
    maxLength: 10000,
  },

});

const Producto = mongoose.model("producto", productoSchema);

export default Producto;
