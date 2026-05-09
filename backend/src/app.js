const express = require('express');
const cors = require('cors');
const biciRoutes = require('./routes/biciRoutes');
require('dotenv').config({ path: '../../.env' });

const app = express();

// Configuraciones (Middlewares)
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', biciRoutes);

// Puerto y encendido del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
