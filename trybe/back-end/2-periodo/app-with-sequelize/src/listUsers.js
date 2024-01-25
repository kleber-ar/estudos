const { User } = require('./models');

(async () => {
  const users = await User.findAll();
  console.log(users);
})();