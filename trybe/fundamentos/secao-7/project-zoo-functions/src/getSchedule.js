const data = require('../data/zoo_data');

const { species, hours } = data;

const getDaySchedule = (day) => {
  if (day === 'Monday') {
    return {
      Monday: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }

  const speciesDay = species
    .filter(({ availability }) => availability.includes(day))
    .map(({ name }) => name);

  return {
    [day]: {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: speciesDay,
    },
  };
};

const getAnimal = (animal) => {
  const find = species.find(({ name }) => name === animal);

  return find ? find.availability : 'Animal não encontrado';
};

const getSchedule = (scheduleTarget) => {
  // seu código aqui
  if (species.some(({ name }) => name === scheduleTarget)) {
    return getAnimal(scheduleTarget);
  }

  if (scheduleTarget in hours) {
    return getDaySchedule(scheduleTarget);
  }

  return Object.keys(hours).reduce(
    (schedule, day) => ({
      ...schedule,
      ...getDaySchedule(day),
    }),
    {},
  );
};
module.exports = getSchedule;
