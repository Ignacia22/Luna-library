require('dotenv').config(); 
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/index';

const app = express();

app.use(morgan('dev'));
app.use(cors());

// 🆕 VOLVER a poner express.json() ANTES de las rutas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router); // Las rutas van DESPUÉS

export default app;