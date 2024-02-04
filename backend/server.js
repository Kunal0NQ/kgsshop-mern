import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import products from './data/products.js';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// console.log(JSON.stringify(products));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Express App');
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
