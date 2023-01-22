import mongoose, { Schema } from "mongoose";

export const usuarioSchema = Schema({
  nombre: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 10,
    maxLength: 60,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  isAdmin: {
    type: Boolean,
    value: false
  }
});

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;
