import mongoose, { Schema } from "mongoose";

const pedidoSchema = new Schema({
  nombrePedido: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 1000,
  },
  pedido: {
    type: Array,
    required: true,
    minLength: 3,
  },
  total: {
    type: Number,
    required: true,
    min: 1,
    maxLength: 1000000,
  },
  estado: {
    type: String,
    required: true,
  },
});

const Pedido = mongoose.model("pedido", pedidoSchema);

export default Pedido;