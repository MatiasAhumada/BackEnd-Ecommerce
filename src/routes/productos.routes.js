import { Router } from "express";
import { check } from "express-validator";
import { crearProducto, editarProducto, listarProductos, borrarProducto, obtenerProducto } from "../controllers/productos.controllers";

const router = Router();


router.route("/productos")
  .get(listarProductos)
  .post(
    [
      check("nombreProducto")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .isLength({min:2, max:50})
      .withMessage("El nobmre del producto debe tener entre 2 y 50 caracteres"),
      check("marca")
       .notEmpty()
       .withMessage("Seleccione una marca")
      .isIn(["Samsung", "Motorola", "LG", "Apple"])
      .withMessage("Seleccione una marca"),
      check("precio")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .isNumeric()
      .withMessage("El precio debe ser un número")
      .custom((valor)=>{
        if(valor >=1 && valor <= 10000){
          return true
        }else{
          throw new Error("El precio debe estar entre 1 y 10000")
        }
      }),
      
      check("imagen")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
      .withMessage("Ingrese una URL valida"),
      check("pantalla")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .isLength({min:2, max:50})
      .withMessage("El dato pantalla debe tener entre 2 y 50 caracteres"),
      check("procesador")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .isLength({min:2, max:50})
      .withMessage("El dato pocesador debe tener entre 2 y 50 caracteres"),
      check("android")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .isLength({min:2, max:50})
      .withMessage("El dato android debe tener entre 2 y 50 caracteres"),
      check("interna")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .isLength({min:2, max:50})
      .withMessage("El dato interna debe tener entre 2 y 50 caracteres"),
      check("ram")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .isLength({min:2, max:50})
      .withMessage("El dato ram debe tener entre 2 y 50 caracteres"),
      check("expandible")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .isLength({min:2, max:50})
      .withMessage("El dato expandible debe tener entre 2 y 50 caracteres"),
      check("camara")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .isLength({min:2, max:50})
      .withMessage("El dato camara debe tener entre 2 y 50 caracteres"),
      check("liberado")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .isLength({min:2, max:50})
      .withMessage("El dato liberado debe tener entre 2 y 50 caracteres"),
      check("resena")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .isLength({min:2, max:500})
      .withMessage("El dato resena debe tener entre 2 y 500 caracteres"),
    ],
    crearProducto);

router.route("/productos/:id")
  .get(obtenerProducto)
  .put(
    [
    check("nombreProducto")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:2, max:50})
    .withMessage("El nobmre del producto debe tener entre 2 y 50 caracteres"),
    check("marca")
     .notEmpty()
     .withMessage("Seleccione una marca")
    .isIn(["Samsung", "Motorola", "LG", "Apple"])
    .withMessage("Seleccione una marca"),
    check("precio")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .custom((valor)=>{
      if(valor >=1 && valor <= 10000){
        return true
      }else{
        throw new Error("El precio debe estar entre 1 y 10000")
      }
    }),
    
    check("imagen")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    .withMessage("Ingrese una URL valida"),
    check("pantalla")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:2, max:50})
    .withMessage("El dato pantalla debe tener entre 2 y 50 caracteres"),
    check("procesador")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:2, max:50})
    .withMessage("El dato pocesador debe tener entre 2 y 50 caracteres"),
    check("android")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:2, max:50})
    .withMessage("El dato android debe tener entre 2 y 50 caracteres"),
    check("interna")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:2, max:50})
    .withMessage("El dato interna debe tener entre 2 y 50 caracteres"),
    check("ram")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:2, max:50})
    .withMessage("El dato ram debe tener entre 2 y 50 caracteres"),
    check("expandible")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:2, max:50})
    .withMessage("El dato expandible debe tener entre 2 y 50 caracteres"),
    check("camara")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:2, max:50})
    .withMessage("El dato camara debe tener entre 2 y 50 caracteres"),
    check("liberado")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:2, max:50})
    .withMessage("El dato liberado debe tener entre 2 y 50 caracteres"),
    check("resena")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:2, max:500})
    .withMessage("El dato resena debe tener entre 2 y 500 caracteres"),
  ],
  editarProducto)
  .delete(borrarProducto)

export default router;
