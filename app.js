// server.js
const express = require('express');
const sequelize = require('./src/database');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes);

// Sincronizar la base de datos y levantar el servidor
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
