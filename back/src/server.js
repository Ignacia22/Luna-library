require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/index');

const app = express();

app.use(morgan('dev'));
app.use(cors());

// 🆕 VOLVER a poner express.json() ANTES de las rutas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router); // Las rutas van DESPUÉS

module.exports = app;