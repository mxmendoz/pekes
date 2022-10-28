import express from 'express';
import asyncHandler from 'express-async-handler';
import Category from './../Models/CategoryModel.js';
import { admin, protect } from './../Middlewares/AuthMiddleware.js';

const categoryRoute = express.Router();

//Obtener todos los productos de la Base de Datos MongoDB
categoryRoute.get(
  '/',
  asyncHandler(async (req, res) => {
    const pageSize = 6;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? {
          cat: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {};
    const count = await Category.countDocuments({ ...keyword });
    const categories = await Category.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({ categories, page, pages: Math.ceil(count / pageSize) });
  })
);

//El Admin obtiene todo el producto sin búsqueda ni paginación
categoryRoute.get(
  '/all',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const categories = await Category.find({}).sort({ _id: -1 });
    res.json(categories);
  })
);

//Obtener un producto en específico
categoryRoute.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (category) {
      res.json(category);
    } else {
      res.status(404);
      throw new Error('Categoría del producto no encontrado!');
    }
  })
);

//Eliminar un producto
categoryRoute.delete(
  '/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (category) {
      await category.remove();
      res.json({ message: 'Categoría eliminado!' });
    } else {
      res.status(404);
      throw new Error('Categoría del producto no encontrado!');
    }
  })
);

//Crear un producto
categoryRoute.post(
  '/',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const { cat, subcat, subcat2, image } = req.body;
    const categoryExist = await Category.findOne({ cat });
    if (categoryExist) {
      res.status(400);
      throw new Error('La categoría del producto ya existe!');
    } else {
      const category = new Category({
        cat,
        subcat,
        subcat2,
        image,
        user: req.user._id,
      });
      if (category) {
        const createdcategory = await category.save();
        res.status(201).json(createdcategory);
      } else {
        res.status(404);
        throw new Error('Datos de la categoría no son válidos!');
      }
    }
  })
);

//Actualizar un producto
categoryRoute.put(
  '/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const { cat, subcat, subcat2, image } = req.body;
    const category = await Category.findById(req.params.id);

    if (category) {
      category.cat = cat || category.cat;
      category.subcat = subcat || category.subcat;
      category.subcat2 = subcat2 || category.subcat2;
      category.image = image || category.image;

      const updatedCategory = await category.save();
      res.json(updatedCategory);
    } else {
      res.status(404);
      throw new Error('Categoría del producto no encontrado!');
    }
  })
);

export default categoryRoute;
