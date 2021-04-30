const Joi = require('joi');

const productIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productTagSchema = Joi.array().items(Joi.string().max(10));

/** Se crean los esquemas en caso de que no existan */
const createProductSchema = {
  name: Joi.string()
    .max(50)
    .required(),
  price: Joi.number()
    .min(1)
    .max(1000000),
  image: Joi.string().required(),
  tags: productTagSchema,
};

/**
 * Se hacen las modificaciones de los esquemas en caso de que estos ya existan
 */
const updateProductSchema = {
  name: Joi.string().max(50),
  price: Joi.number()
    .min(1)
    .max(1000000),
  image: Joi.string(),
  tags: productTagSchema,
};

/** Al final se exportan las constantes como modulos */
module.exports = {
  productIdSchema,
  productTagSchema,
  createProductSchema,
  updateProductSchema,
};
