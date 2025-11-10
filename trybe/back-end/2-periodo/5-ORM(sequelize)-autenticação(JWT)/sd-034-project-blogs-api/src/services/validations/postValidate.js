const Joi = require('joi');

const errorMessage = 'Some required fields are missing';

const schema = Joi.object({
  title: Joi.string().required().messages({
    'string.required': errorMessage,
    'string.empty': errorMessage,
  }),
  content: Joi.string().required().messages({
    'string.required': errorMessage,
    'string.empty': errorMessage,
  }),
  categoryIds: Joi.array().items(Joi.number()).required().messages({
    'string.required': errorMessage,
    'stryng.empty': errorMessage,
  }),
});

const validate = (title, content, categoryIds) => {
  const { error } = schema.validate({ title, content, categoryIds });
  
  if (error) return { status: 'INVALID_VALUE', data: { message: error.message } };
  
  return null;
};

module.exports = validate;
