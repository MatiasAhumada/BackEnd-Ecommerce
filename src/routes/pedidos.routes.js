import { Router } from "express";
import {
  borrarPedido,
  crearPedido,
  editarPedido,
  listarPedidos,
  obtenerPedido,
  listarPedidosPendientes,
  listarPedidosProcesando,
  listarPedidosListos,
  listarPedidosCancelados,
  listarPedidosPersonales,
} from "../controllers/pedidos.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/pedidos")
  .get(listarPedidos)
  .post(
    [
      check("nombrePedido")
        .notEmpty()
        .withMessage("El nombre del pedido es un dato obligatorio")
        .isLength({ min: 3, max: 1000 })
        .withMessage(
          "El nombre del pedido debe contener entre 3 y 1000 caracteres"
        ),
      check("pedido")
        .notEmpty()
        .withMessage("El pedido es un dato obligatorio")
        .isLength({ min: 3 })
        .withMessage("El pedido debe contener por lo menos 3 caracteres"),
      
      check("total")
        .notEmpty()
        .withMessage("El total es un dato obligatorio")
        .isNumeric({ min: 1, max: 1000000 })
        .withMessage("El total debe ser entre $1 y $1000000"),
        check("metodo")
        .notEmpty()
        .withMessage("El mnetodo es un dato obligatorio")
        .isLength({ min: 3 })
        .withMessage("El metodo debe contener por lo menos 3 caracteres"),
      check("estado")
        .notEmpty()
        .withMessage("El estado es un dato obligatorio")
        .isIn([
          "Pendiente",
          "En preparacion",
          "Listo para retirar",
          "Retirado",
          "Cancelado",
        ])
        .withMessage("La categoria debe ser correcta"),
    ],
    crearPedido
  );

router
  .route("/pedidos/:id")
  .get(obtenerPedido)
  .put(
    [
      check("nombrePedido")
        .notEmpty()
        .withMessage("El nombre del pedido es un dato obligatorio")
        .isLength({ min: 3, max: 1000 })
        .withMessage(
          "El nombre del pedido debe contener entre 3 y 1000 caracteres"
        ),
      check("pedido")
        .notEmpty()
        .withMessage("El pedido es un dato obligatorio")
        .isLength({ min: 3 })
        .withMessage("El pedido debe contener por lo menos 3 caracteres"),
      check("total")
        .notEmpty()
        .withMessage("El total es un dato obligatorio")
        .isNumeric({ min: 1, max: 1000000 })
        .withMessage("El total debe ser entre $1 y $1000000"),
        check("metodo")
        .notEmpty()
        .withMessage("El mnetodo es un dato obligatorio")
        .isIn([
          'Transferencia',
          'Efectivo'
        ])
        .withMessage("El metodo debe contener por lo menos 3 caracteres"),
      check("estado")
        .notEmpty()
        .withMessage("El estado es un dato obligatorio")
        .isIn([
          "Pendiente",
          "En preparacion",
          "Listo para retirar",
          "Retirado",
          "Cancelado",
        ])
        .withMessage("La categoria debe ser correcta"),
    ],
    editarPedido
  )
  .delete(borrarPedido);

router.route("/pedidos-pendientes").get(listarPedidosPendientes);
router.route("/pedidos-procesando").get(listarPedidosProcesando);
router.route("/pedidos-listos").get(listarPedidosListos);
router.route("/pedidos-cancelados").get(listarPedidosCancelados);
router.route("/pedidos-personales").post(listarPedidosPersonales);

export default router;
