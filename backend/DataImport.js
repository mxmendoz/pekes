import express from 'express';
import User from './Models/UserModel.js';
import users from './data/users.js';
import Product from './Models/ProductModel.js';
import products from './data/Products.js';
import Supplier from './Models/SupplierModel.js'; ////////
import suppliers from './data/Suppliers.js'; ////////////
import Customer from './Models/CustomerModel.js'; ////////
import customers from './data/Customers.js'; ///////
import Category from './Models/CategoryModel.js'; //////
import categories from './data/Categories.js'; ////////
import asyncHandler from 'express-async-handler';

const ImportData = express.Router();

ImportData.post(
  '/user',
  asyncHandler(async (req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  '/products',
  asyncHandler(async (req, res) => {
    await Product.remove({});
    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
  })
);

ImportData.post(
  '/categories',
  asyncHandler(async (req, res) => {
    await Category.remove({});
    const importCategories = await Category.insertMany(categories);
    res.send({ importCategories });
  })
);

ImportData.post(
  '/suppliers',
  asyncHandler(async (req, res) => {
    await Supplier.remove({});
    const importSuppliers = await Supplier.insertMany(suppliers);
    res.send({ importSuppliers });
  })
);

ImportData.post(
  '/customers',
  asyncHandler(async (req, res) => {
    await Customer.remove({});
    const importCustomers = await Customer.insertMany(customers);
    res.send({ importCustomers });
  })
);
export default ImportData;
