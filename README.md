# API REST - Monitoreo Agrícola

## Descripción

Esta aplicación corresponde a una API REST desarrollada con Node.js, Express y MongoDB Atlas para la gestión de un sistema de monitoreo agrícola. La API permite administrar usuarios, parcelas y cultivos mediante operaciones CRUD y cuenta con autenticación básica utilizando contraseñas cifradas con bcrypt.

---

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Express Validator
- bcryptjs
- dotenv
- Morgan
- CORS
- Postman

---

## Arquitectura

El proyecto utiliza el patrón MVC (Modelo - Vista - Controlador).

```
src/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
│
├── app.js
└── server.js
```

---

## Instalación

1. Clonar el proyecto

```bash
git clone https://github.com/tuusuario/monitoreo-agricola-api.git
```

2. Entrar al proyecto

```bash
cd monitoreo-agricola-api
```

3. Instalar dependencias

```bash
npm install
```

4. Crear el archivo `.env`

```env
PORT=3000
MONGODB_URI=tu_cadena_de_conexion
```

5. Ejecutar

```bash
npm run dev
```

---

## Endpoints

### Usuarios

| Método | Endpoint |
|---------|----------|
| POST | /api/usuarios |
| GET | /api/usuarios |
| GET | /api/usuarios/:id |
| PUT | /api/usuarios/:id |
| DELETE | /api/usuarios/:id |

---

### Parcelas

| Método | Endpoint |
|---------|----------|
| POST | /api/parcelas |
| GET | /api/parcelas |
| GET | /api/parcelas/:id |
| PUT | /api/parcelas/:id |
| DELETE | /api/parcelas/:id |

---

### Cultivos

| Método | Endpoint |
|---------|----------|
| POST | /api/cultivos |
| GET | /api/cultivos |
| GET | /api/cultivos/:id |
| PUT | /api/cultivos/:id |
| DELETE | /api/cultivos/:id |

---

### Autenticación

| Método | Endpoint |
|---------|----------|
| POST | /api/auth/login |

---

## Funcionalidades

- CRUD de usuarios
- CRUD de parcelas
- CRUD de cultivos
- Validación de datos
- Relaciones entre colecciones mediante Populate
- Cifrado de contraseñas con bcrypt
- Inicio de sesión
- Base de datos en MongoDB Atlas

---

## Autor

Juan Roncancio
