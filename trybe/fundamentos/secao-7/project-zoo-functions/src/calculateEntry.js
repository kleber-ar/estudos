const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  // seu código aqui
  if (!entrants) return { child: 0, adult: 0, senior: 0 };

  return entrants.reduce(
    (acc, entrant) => {
      if (entrant.age < 18) {
        acc.child += 1;
      } else if (entrant.age >= 50) {
        acc.senior += 1;
      } else {
        acc.adult += 1;
      }

      return acc;
    },
    { child: 0, adult: 0, senior: 0 },
  );
};

const calculateEntry = (entrants) => {
  // seu código aqui
  if (!entrants) return 0;

  const { child, adult, senior } = countEntrants(entrants);

  return (
    child * data.prices.child
    + adult * data.prices.adult
    + senior * data.prices.senior
  );
};

module.exports = { calculateEntry, countEntrants };
