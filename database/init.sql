SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;
-- Crear la base de datos si no existe (aunque Docker la crea por el env, es buena práctica)
CREATE DATABASE IF NOT EXISTS bicitaxis;
USE bicitaxis;

-- 1. Tabla de Vehículos (Bicitaxis)
-- Esta debe ir primero porque es referenciada por las otras dos
CREATE TABLE IF NOT EXISTS bicitaxis (
    placa VARCHAR(20) PRIMARY KEY,
    anos_activos INT,
    ultima_revision DATE,
    proxima_revision DATE
);

-- 2. Tabla de Conductores
CREATE TABLE IF NOT EXISTS conductores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    sede VARCHAR(50),
    ranking DECIMAL(2,1),
    resenas TEXT,
    placa_vehiculo VARCHAR(20),
    FOREIGN KEY (placa_vehiculo) REFERENCES bicitaxis(placa)
);

-- 3. Tabla de Historial de Mantenimiento
CREATE TABLE IF NOT EXISTS mantenimiento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa_vehiculo VARCHAR(20),
    fecha_mantenimiento DATE,
    piezas_cambiadas TEXT,
    detalles TEXT,
    FOREIGN KEY (placa_vehiculo) REFERENCES bicitaxis(placa)
);

-- --- INSERCIÓN DE DATOS INICIALES ---

-- Datos para el vehículo
INSERT INTO bicitaxis (placa, anos_activos, ultima_revision, proxima_revision) 
VALUES ('BC-001', 3, '2026-01-15', '2026-07-15');

-- Datos para el conductor (Pedro Pérez)
INSERT INTO conductores (nombre, sede, ranking, resenas, placa_vehiculo) 
VALUES ('Pedro Pérez', 'Coyoacán', 4.8, 'Excelente servicio, muy amable y puntual durante el recorrido por el centro.', 'BC-001');

-- Datos para el historial de mantenimiento
INSERT INTO mantenimiento (placa_vehiculo, fecha_mantenimiento, piezas_cambiadas, detalles) 
VALUES ('BC-001', '2026-01-15', 'Cadena, Balatas traseras y ajuste de rayos', 'Se realizó mantenimiento preventivo general para asegurar el frenado.');
