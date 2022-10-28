import express from 'express';
import asyncHandler from 'express-async-handler';
import Customer from './../Models/CustomerModel.js';
import { admin, protect } from './../Middlewares/AuthMiddleware.js';

const customerRoute = express.Router();

//Obtener todos los productos de la Base de Datos MongoDB
customerRoute.get(
  '/',
  asyncHandler(async (req, res) => {
    const pageSize = 6;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {};
    const count = await Customer.countDocuments({ ...keyword });
    const customers = await Customer.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({ customers, page, pages: Math.ceil(count / pageSize) });
  })
);

//El Admin obtiene todo el producto sin búsqueda ni paginación
customerRoute.get(
  '/all',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const customers = await Customer.find({}).sort({ _id: -1 });
    res.json(customers);
  })
);

//Obtener un producto en específico
customerRoute.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404);
      throw new Error('Cliente no encontrado!');
    }
  })
);

//Eliminar un producto
customerRoute.delete(
  '/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    if (customer) {
      await customer.remove();
      res.json({ message: 'Cliente eliminado!' });
    } else {
      res.status(404);
      throw new Error('Cliente no encontrado!');
    }
  })
);

//Crear un producto
customerRoute.post(
  '/',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const {
      name,
      email,
      age,
      gender,
      nit,
      phone,
      country,
      city,
      address,
      note,
      image,
    } = req.body;
    const customerExist = await Customer.findOne({ name });
    if (customerExist) {
      res.status(400);
      throw new Error('El nombre del cliente ya existe!');
    } else {
      const customer = new Customer({
        name,
        email,
        age,
        gender,
        nit,
        phone,
        country,
        city,
        address,
        note,
        image,
        user: req.user._id,
      });
      if (customer) {
        const createdcustomer = await customer.save();
        res.status(201).json(createdcustomer);
      } else {
        res.status(404);
        throw new Error('Datos del cliente no son válidos!');
      }
    }
  })
);

//Actualizar un producto
customerRoute.put(
  '/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const {
      name,
      email,
      age,
      gender,
      nit,
      phone,
      country,
      city,
      address,
      note,
      image,
    } = req.body;
    const customer = await Customer.findById(req.params.id);

    if (customer) {
      customer.name = name || customer.name;
      customer.email = email || customer.email;
      customer.age = age || customer.age;
      customer.gender = gender || customer.gender;
      customer.nit = nit || customer.nit;
      customer.phone = phone || customer.phone;
      customer.country = country || customer.country;
      customer.city = city || customer.city;
      customer.address = address || customer.address;
      customer.note = note || customer.note;
      customer.image = image || customer.image;

      const updatedCustomer = await customer.save();
      res.json(updatedCustomer);
    } else {
      res.status(404);
      throw new Error('Cliente no encontrado!');
    }
  })
);

export default customerRoute;
