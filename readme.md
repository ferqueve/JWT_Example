# Demo de Autenticación JWT

Este proyecto es una demostración simple de autenticación usando JSON Web Tokens (JWT). Incluye un frontend en HTML/Bootstrap y un backend en Node.js/Express.

## 🎯 Propósito Educativo

Este proyecto está diseñado para estudiantes que están aprendiendo sobre:
- Autenticación web
- JSON Web Tokens (JWT)
- APIs REST
- Frontend y Backend básico

## 🚀 Características

- Frontend simple con Bootstrap y FontAwesome
- Autenticación mediante JWT
- Protección de rutas
- Tokens con expiración corta (30 segundos)
- Manejo básico de errores
- Interfaz responsive

## 📋 Prerequisitos

- Node.js instalado en tu sistema
- Navegador web moderno
- Editor de código

## 🛠️ Instalación

1. **Clonar o crear el proyecto**
```bash
mkdir jwt-demo
cd jwt-demo
```

2. **Configurar el Backend**
```bash
# Inicializar proyecto Node.js
npm init -y

# Instalar dependencias
npm install express jsonwebtoken cors
```

3. **Crear archivos del proyecto**
- Crear `server.js` con el código del backend
- Crear `index.html` con el código del frontend

## 🔧 Configuración

### Backend (server.js)
Las credenciales por defecto son:
- Usuario: `estudiante`
- Contraseña: `123456`
- Puerto: `3000`
- Tiempo de expiración del token: `30 segundos`

Puedes modificar estos valores en el archivo `server.js`.

## 📦 Estructura del Proyecto
```
jwt-demo/
│
├── server.js        # Servidor Node.js/Express
├── index.html      # Frontend
├── package.json    # Configuración de Node.js
└── README.md       # Este archivo
```

## 🚀 Ejecución

1. **Iniciar el servidor**
```bash
node server.js
```
El servidor estará disponible en `http://localhost:3000`

2. **Abrir el frontend**
- Abrir el archivo `index.html` en un navegador web
- O usar un servidor local para servir el archivo HTML

## 🔑 Uso

1. Abrir la aplicación en el navegador
2. Ingresar las credenciales (estudiante/123456)
3. Al autenticarse correctamente, verás el contenido protegido
4. El token expirará en 30 segundos
5. Después de la expiración, serás redirigido al login

## 🔒 Seguridad

**Nota**: Este es un proyecto de demostración y no debe usarse en producción sin modificaciones. Para un entorno de producción, considera:

- Mover la clave secreta a variables de entorno
- Implementar una base de datos para usuarios
- Añadir HTTPS
- Implementar rate limiting
- Mejorar el manejo de errores
- Añadir validación de datos

## 📝 Endpoints API

### POST /login
- **Propósito**: Autenticar usuario
- **Body**:
```json
{
    "username": "string",
    "password": "string"
}
```
- **Respuesta exitosa**:
```json
{
    "token": "string"
}
```

### GET /protected
- **Propósito**: Acceder a contenido protegido
- **Headers**: 
```
Authorization: Bearer <token>
```
- **Respuesta exitosa**:
```json
{
    "message": "¡Acceso permitido al contenido protegido!"
}
```

## 🤝 Contribuir

Este es un proyecto educativo, pero las sugerencias son bienvenidas. Puedes:
1. Fork del repositorio
2. Crear una rama para tu feature
3. Commit de tus cambios
4. Push a la rama
5. Crear un Pull Request

## 📜 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

## 🙋‍♂️ Soporte

Si tienes dudas o preguntas sobre el funcionamiento del proyecto, puedes:
- Abrir un issue
- Consultar con tu profesor
- Revisar la documentación de JWT
