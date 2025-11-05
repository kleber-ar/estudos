const app = require('./app');

const API_PORT = process.env.API_PORT || 3001;

app.listen(API_PORT, () => {
  console.log(`Port: ${API_PORT}`);
});
