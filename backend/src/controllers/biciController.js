const db = require('../config/db');

const getDatosGeneral = async (req, res) => {
    try {
        // Unimos conductores con bicitaxis para tener la placa disponible
        const [rows] = await db.query(`
            SELECT c.*, b.placa, b.anos_activos 
            FROM conductores c
            JOIN bicitaxis b ON c.placa_vehiculo = b.placa
        `);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
};

const getMantenimiento = async (req, res) => {
    try {
        // Unimos mantenimiento con conductores para saber quién maneja la unidad
        const [rows] = await db.query(`
            SELECT m.*, c.nombre as nombre_conductor
            FROM mantenimiento m
            JOIN conductores c ON m.placa_vehiculo = c.placa_vehiculo
        `);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener mantenimiento' });
    }
};

// Exportamos ambas funciones al final en un solo objeto
module.exports = { 
    getDatosGeneral, 
    getMantenimiento 
};
