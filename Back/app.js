// Importar dependencias necesarias
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

// Middleware para parsear JSON y habilitar CORS
app.use(express.json());
app.use(cors());

// Clave secreta para JWT (en producción usar variable de entorno)
const JWT_SECRET = 'claveSecretaParaEstudiantes123';

// Usuario de prueba (en producción usar base de datos)
const USER = {
    username: 'estudiante',
    password: '123456'
};

// Tiempo de expiración del token (30 segundos para demostración)
const TOKEN_EXPIRATION = '30s';

// Middleware para verificar el token
const authenticateToken = (req, res, next) => {
    // Obtener el header de autorización
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    // Verificar el token
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido o expirado' });
        }
        req.user = user;
        next();
    });
};

// Ruta de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verificar credenciales
    if (username === USER.username && password === USER.password) {
        // Crear token
        const token = jwt.sign(
            { username: USER.username },
            JWT_SECRET,
            { expiresIn: TOKEN_EXPIRATION }
        );

        res.json({ token });
    } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
});

// Ruta protegida
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: '¡Acceso permitido al contenido protegido!' });
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
