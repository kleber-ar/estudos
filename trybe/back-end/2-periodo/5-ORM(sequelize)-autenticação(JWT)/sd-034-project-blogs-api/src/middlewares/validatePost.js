const Joi = require('joi');

const errorMessage = 'Some required fields are missing';

const schema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': errorMessage,
    'string.empty': errorMessage,
  }),
  content: Joi.string().required().messages({
    'any.required': errorMessage,
    'string.empty': errorMessage,
  }),
  categoryIds: Joi.array().items(Joi.number()).required().messages({
    'any.required': errorMessage,
    'array.base': errorMessage,
    'array.empty': errorMessage,
  }),
});

const validatePost = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  const { error } = schema.validate({ title, content, categoryIds });

  if (error) {
    return next({ status: 'INVALID_VALUE', data: { message: error.message } });
  }

  next();
};

module.exports = validatePost;
