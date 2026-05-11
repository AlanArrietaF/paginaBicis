# 🚲 Bicitaxis CDMX Management System

[![Docker](https://img.shields.io/badge/Docker-24.0.5-blue?logo=docker)](https://www.docker.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-orange?logo=mysql)](https://www.mysql.com/)

Sistema integral de gestión para unidades de bicitaxis en la Ciudad de México. Este proyecto permite monitorear el desempeño de los conductores (rankings/reseñas) y supervisar el historial de mantenimiento técnico de cada unidad, asegurando un transporte sustentable y seguro.

---

## Vista Previa del Proyecto

| Home / Hero Section | Gestión de Conductores | Historial de Mantenimiento |
| :---: | :---: | :---: |
| ![Home](frontend/src/assets/preview_home.png) | ![Conductores](frontend/src/assets/preview_conductores.png) | ![Historial](frontend/src/assets/preview_historial.png) |
> *Nota: Reemplaza las rutas de las imágenes con capturas reales de tu proyecto una vez que las subas a tu carpeta de assets.*

---

## Stack Tecnológico

El sistema utiliza una arquitectura **Full-Stack** desacoplada mediante microservicios contenerizados:

* **Frontend:** Interfaz de usuario responsiva construida con HTML5, CSS3 y JavaScript Vanilla, basada en un diseño de alta fidelidad de Figma.
* **Backend:** API REST desarrollada con Node.js y Express para la manipulación de datos.
* **Base de Datos:** Almacenamiento relacional en MySQL 8.0 para persistencia de registros.
* **Infraestructura:** Orquestación de servicios mediante Docker Compose para garantizar la portabilidad del entorno de desarrollo.

---

##  Configuración y Despliegue

### Requisitos previos
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado.
* [Git](https://git-scm.com/) para clonar el repositorio.

### Instalación en 3 pasos

1. **Clonar el repositorio:**
   bash
   git clone [https://github.com/AlanArrietaF/paginaBicis.git](https://github.com/AlanArrietaF/paginaBicis.git)
   cd paginaBicis
  
2. **Configurar variables de entorno:**
   Crea un archivo .evn en la raíz con los siguiente parametros:
	DB_HOST=db
	DB_USER=admin_bicis
	DB_PASSWORD=tu_password_seguro
	DB_NAME=bicitaxis
	PORT=3000
3. **Levantar contenedores:**
   bash
   docker compose up --build

---

##  Endpoints de la API


Método GET /api/info (retorna la lista completa de conductores y sus vehículos asociados).

Método GET /api/mantenimiento (retorna el historial técnico de las unidades).

---

##  Autor

Alan Arrieta UNAM ICO
_______________________________
© 2026 - Bicitaxis CDMX Project
