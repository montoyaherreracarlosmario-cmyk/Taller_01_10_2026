# Concesionario – Registro de vehículos

Proyecto sencillo de ingeniería de software: backend (Node.js + Express) y frontend (HTML, CSS y JavaScript).
Permite registrar vehículos con nombre, marca y kilometraje, verlos y eliminarlos.

## Cómo ejecutarlo
1. Instalar Node.js (https://nodejs.org).
2. Abrir una terminal en la carpeta `backend/`
3. `npm install`
4. `npm start`
5. Abrir http://localhost:3000

## Estructura
```
concesionario/
├── backend/
│   ├── server.js        API REST (GET, POST, DELETE en /api/vehiculos)
│   └── package.json     Dependencias y script de arranque
├── frontend/
│   ├── index.html       Estructura de la página
│   ├── style.css        Estilos
│   └── app.js           Lógica del cliente (fetch a la API)
├── COLABORACION.md      Reparto de tareas y guía de Git
└── README.md
```
