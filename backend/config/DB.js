import mongoose from 'mongoose';

const conectarDB = async () => {
  try {
    const coneccion = await mongoose.connect(process.env.MONGO_DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Base de Datos Mongo conectado...');
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default conectarDB;
