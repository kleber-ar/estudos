const { User } = require('./models');

(async () => {
  const user = await User.findByPk(1);
  console.log(user);
})();