import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/DB.js';
import ImportData from './DataImport.js';
import productRoute from './Routes/ProductRoutes.js';
import supplierRouter from './Routes/SupplierRoutes.js'; ///////////////////
import customerRouter from './Routes/CustomerRoutes.js'; ///////////////////
import categoryRouter from './Routes/CategoryRoutes.js'; ////////////////
import { errorHandler, notFound } from './Middlewares/Errors.js';
import userRouter from './Routes/UserRoutes.js';
import orderRouter from './Routes/orderRoutes.js';
import cors from 'cors';
// import products from './data/Products.js';

dotenv.config();
conectarDB();
const app = express();
app.use(express.json());
app.use(cors());

//Datos del API
app.use('/api/import', ImportData);
app.use('/api/products', productRoute);
app.use('/api/suppliers', supplierRouter); /////////////////
app.use('/api/customers', customerRouter); /////////////////
app.use('/api/categories', categoryRouter); ///////////
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

//Errores desde el handler
app.use(notFound);
app.use(errorHandler);

const PUERTO = process.env.PUERTO; /* || ó puerto asignado por la web*/
app.listen(PUERTO, console.log(`Servidor corriendo en el puerto ${PUERTO}`));
