const Joi = require('joi');

const errorMessage = 'Some required fields are missing';

const Schema = Joi.object({
  title: Joi.string().required().messages({
    'string.required': errorMessage,
    'string.empty': errorMessage,
  }),
  content: Joi.string().required().messages({
    'string.required': errorMessage,
    'string.empty': errorMessage,
  }),
});

const validate = (title, content) => {
  const { error } = Schema.validate({ title, content });

  if (error) return { status: 'INVALID_VALUE', data: { message: error.message } };

  return null;
};

module.exports = validate;