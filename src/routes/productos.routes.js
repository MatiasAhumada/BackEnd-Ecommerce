import { Router } from "express";
import { check } from "express-validator";
import { crearProducto, editarProducto, listarProductos, borrarProducto, obtenerProducto } from "../controllers/productos.controllers";

const router = Router();


router.route("/productos")
  .get(listarProductos)
  .post(
//     [
//     check("nombreProducto")
//     .notEmpty()
//     .withMessage("Campo obligatorio")
//     .isLength({min:2, max:50})
//     .withMessage("El nobmre del producto debe tener entre 2 y 50 caracteres"),
//     check("precio")
//     .notEmpty()
//     .withMessage("Campo obligatorio")
//     .isNumeric()
//     .withMessage("El precio debe ser un número")
//     .custom((valor)=>{
//       if(valor >=1 && valor <= 10000){
//         return true
//       }else{
//         throw new Error("El precio debe estar entre 1 y 10000")
//       }
//     }),
//      check("categoria")
//      .notEmpty()
//      .withMessage("Seleccione una categoria")
//     .isIn(["picante epiko", "medio picante", "comida caliente", "comida fria"])
//     .withMessage("Seleccione una categoria"),
//     check("imagen")
//     .notEmpty()
//     .withMessage("Campo obligatorio")
//     .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
//     .withMessage("Ingrese una URL valida")
//   ],
    crearProducto);

router.route("/productos/:id")
  .get(obtenerProducto)
  .put(
//     [
//     check("nombreProducto")
//     .notEmpty()
//     .withMessage("Campo obligatorio")
//     .isLength({min:2, max:50})
//     .withMessage("El nobmre del producto debe tener entre 2 y 50 caracteres"),
//     check("precio")
//     .notEmpty()
//     .withMessage("Campo obligatorio")
//     .isNumeric()
//     .withMessage("El precio debe ser un número")
//     .custom((valor)=>{
//       if(valor >=1 && valor <= 10000){
//         return true
//       }else{
//         throw new Error("El precio debe estar entre 1 y 10000")
//       }
//     }),
//      check("categoria")
//      .notEmpty()
//      .withMessage("Seleccione una categoria")
//     .isIn(["picante epiko", "medio picante", "comida caliente", "comida fria"])
//     .withMessage("Seleccione una categoria"),
//     check("imagen")
//     .notEmpty()
//     .withMessage("Campo obligatorio")
//     .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
//     .withMessage("Ingrese una URL valida")
//   ],
  editarProducto)
  .delete(borrarProducto)

export default router;
