const express = require('express');
const loginController = require('./controllers/login.controller');
const userRoutes = require('./routes/user.routes');
const categoryRoute = require('./routes/category.routes');

// ...

const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', loginController.login);

app.use('/user', userRoutes);

app.use('/categories', categoryRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
