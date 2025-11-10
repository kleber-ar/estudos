const Joi = require('joi');

const schema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string().optional(),
});

const validate = ({ displayName, email, password, image }) => {
  const { error } = schema.validate({ displayName, email, password, image });

  if (error) {
    return { status: 'INVALID_VALUE', data: { message: error.message } };
  }

  return null;
};

module.exports = validate;