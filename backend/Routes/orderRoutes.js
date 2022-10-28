import express from 'express';
import asyncHandler from 'express-async-handler';
import { protect, admin } from '../Middlewares/AuthMiddleware.js';
import Order from './../Models/OrderModel.js';

const orderRouter = express.Router();

//Crear un pedido
orderRouter.post(
  '/',
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error('Sin artículos en pedido!');
      return;
    } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });
      const createOrder = await order.save();
      res.status(201).json(createOrder);
    }
  })
);

//Obtener todos los pedidos, por Admin
orderRouter.get(
  '/all',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const orders = await Order.find({})
      .sort({ _id: -1 })
      .populate('user', 'id name email');
    res.json(orders);
  })
);

//Pedidos de inicio de sesión de usuario
orderRouter.get(
  '/',
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.find({ user: req.user._id }).sort({ _id: -1 });
    res.json(order);
  })
);

//Obtener un pedido por Id
orderRouter.get(
  '/:id',
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      'user',
      'name email'
    );

    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error('Pedido no encontrado!');
    }
  })
);

//El pedido está pagado
orderRouter.put(
  '/:id/pay',
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404);
      throw new Error('Pedido no encontrado!');
    }
  })
);

//El pedido está pagado
orderRouter.put(
  '/:id/delivered',
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404);
      throw new Error('Pedido no encontrado!');
    }
  })
);

export default orderRouter;
