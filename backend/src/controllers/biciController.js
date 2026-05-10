const db = require('../config/db');

const getDatosGeneral = async (req, res) => {
    try {
        // Hacemos un JOIN para traer la info del conductor y su bicitaxi al mismo tiempo
        const [rows] = await db.query(`
            SELECT c.nombre, c.sede, c.ranking, c.resenas, b.placa, b.anos_activos 
            FROM conductores c
            JOIN bicitaxis b ON c.placa_vehiculo = b.placa
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
};

module.exports = { getDatosGeneral };

const getMantenimiento = async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT m.*, b.anos_activos 
            FROM mantenimiento m
            JOIN bicitaxis b ON m.placa_vehiculo = b.placa
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener mantenimiento' });
    }
};

// No olvides agregarla al module.exports
module.exports = { getDatosGeneral, getMantenimiento };
