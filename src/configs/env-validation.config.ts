import Joi from 'joi';

export const ConfigModuleValidationSchema = Joi.object({
  SERVER_PORT: Joi.number().required(), //환경변수의 validation check
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_SYNC: Joi.boolean().required().default(true),
});
