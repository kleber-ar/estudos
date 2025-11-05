const express = require('express');
const userController = require('./controllers/user.controller');
const authMiddleware = require('./middlewares/auth');
const adminMiddleware = require('./middlewares/admin');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', userController.login);

app.get('/me', authMiddleware, userController.getMe);

app.get('/top-secret', authMiddleware, adminMiddleware, userController.topSecret);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
