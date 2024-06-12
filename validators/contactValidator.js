const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  phone: Joi.number().required(),
  subject: Joi.string().required(),
  type: Joi.string().required(),
  budget: Joi.number().required(),
  message: Joi.string().required(),
});

module.exports = {
  contactSchema,
};
