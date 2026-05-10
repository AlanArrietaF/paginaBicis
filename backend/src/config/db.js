const mysql = require('mysql2');
require('dotenv').config({ path: '../../.env' }); // Ajusta la ruta según donde esté tu .env

// Creamos un Pool de conexiones para mayor eficiencia
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8mb4',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    // Importante para evitar el error de Public Key que vimos en DBeaver
    allowPublicKeyRetrieval: true
});

// Exportamos la versión de promesas para usar async/await
module.exports = pool.promise();
