import express from 'express';
import asyncHandler from 'express-async-handler';
import Supplier from './../Models/SupplierModel.js';
import { admin, protect } from './../Middlewares/AuthMiddleware.js';

const supplierRoute = express.Router();

//Obtener todos los productos de la Base de Datos MongoDB
supplierRoute.get(
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
    const count = await Supplier.countDocuments({ ...keyword });
    const suppliers = await Supplier.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({ suppliers, page, pages: Math.ceil(count / pageSize) });
  })
);

//El Admin obtiene todo el producto sin búsqueda ni paginación
supplierRoute.get(
  '/all',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const suppliers = await Supplier.find({}).sort({ _id: -1 });
    res.json(suppliers);
  })
);

//Obtener un producto en específico
supplierRoute.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const supplier = await Supplier.findById(req.params.id);
    if (supplier) {
      res.json(supplier);
    } else {
      res.status(404);
      throw new Error('Proveedor no encontrado!');
    }
  })
);

//Eliminar un producto
supplierRoute.delete(
  '/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const supplier = await Supplier.findById(req.params.id);
    if (supplier) {
      await supplier.remove();
      res.json({ message: 'Proveedor eliminado!' });
    } else {
      res.status(404);
      throw new Error('Proveedor no encontrado!');
    }
  })
);

//Crear un producto
supplierRoute.post(
  '/',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const {
      name,
      email,
      nit,
      phone,
      country,
      city,
      address,
      observation,
      image,
    } = req.body;
    const supplierExist = await Supplier.findOne({ name });
    if (supplierExist) {
      res.status(400);
      throw new Error('El nombre del proveedor ya existe!');
    } else {
      const supplier = new Supplier({
        name,
        email,
        nit,
        phone,
        country,
        city,
        address,
        observation,
        image,
        user: req.user._id,
      });
      if (supplier) {
        const createdsupplier = await supplier.save();
        res.status(201).json(createdsupplier);
      } else {
        res.status(404);
        throw new Error('Datos del proveedor no son válidos!');
      }
    }
  })
);

//Actualizar un producto
supplierRoute.put(
  '/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const {
      name,
      email,
      nit,
      phone,
      country,
      city,
      address,
      observation,
      image,
    } = req.body;
    const supplier = await Supplier.findById(req.params.id);

    if (supplier) {
      supplier.name = name || supplier.name;
      supplier.email = email || supplier.email;
      supplier.nit = nit || supplier.nit;
      supplier.phone = phone || supplier.phone;
      supplier.country = country || supplier.country;
      supplier.city = city || supplier.city;
      supplier.address = address || supplier.address;
      supplier.observation = observation || supplier.observation;
      supplier.image = image || supplier.image;

      const updatedSupplier = await supplier.save();
      res.json(updatedSupplier);
    } else {
      res.status(404);
      throw new Error('Proveedor no encontrado!');
    }
  })
);

export default supplierRoute;
