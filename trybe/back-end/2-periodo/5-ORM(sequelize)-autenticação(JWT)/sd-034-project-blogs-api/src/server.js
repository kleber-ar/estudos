const app = require('./app');

// não remova a variável `API_PORT` ou o `listen`
const host = process.env.API_HOST || 'localhost';
const port = process.env.API_PORT || 3001;

app.listen(port, () => console.log(`ouvindo porta ${port} em ${host}`));
