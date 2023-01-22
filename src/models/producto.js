import mongoose, { Schema } from "mongoose";
const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 50,
  },
 

  precio: {
    type: Number,
    required: true,
    minLength: 1,
    maxLength: 10000,
  },
  detalle: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 5000,
  },
  categoria: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
    value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
  },
});

const Producto = mongoose.model("producto", productoSchema);

export default Producto;
