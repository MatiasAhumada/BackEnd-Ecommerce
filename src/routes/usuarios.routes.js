import { Router } from "express";
import {
  borrarUsuario,
  crearUsuario,
  editarUsuario,
  listarUsuarios,
  obtenerUsuario,
} from "../controllers/usuarios.controllers";
import { check } from "express-validator";

const router = Router();

router.route("/usuarios")
  .get(listarUsuarios)
  .post(
//     [
//    check("nombre")
//    .notEmpty()
//    .withMessage("Campo olbigatorio")
//    .isLength({min:3, max:50})
//    .withMessage("El nombre del usuario debe tener entre 3 y 50 caracteres"), 
//    check("email")
//    .isEmail()
//    .notEmpty()
//    .withMessage("Campo obligatorio")
//    .isLength({min:10, max:50}),
//    check("password")
//    .notEmpty()
//    .withMessage("Campo olbigatorio")
//    .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
//   ],
  crearUsuario);


router.route("/usuarios/:id")
  .get(obtenerUsuario)
  .put(
//     [
//     check("nombre")
//     .notEmpty()
//     .withMessage("Campo olbigatorio")
//     .isLength({min:3, max:50})
//     .withMessage("El nombre del usuario debe tener entre 3 y 50 caracteres"), 
//     check("email")
//     .isEmail()
//     .notEmpty()
//     .withMessage("Campo obligatorio")
//     .isLength({min:10, max:50}),
//     check("password")
//     .notEmpty()
//     .withMessage("Campo olbigatorio")
//     .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
//    ],
   editarUsuario)
  .delete(borrarUsuario)


export default router;
