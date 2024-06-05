import { body } from "express-validator";

export const validatorCreateUsers = [
  body(['email', 'password']).notEmpty().withMessage('Data Must Be Completed!'),
  body(['email']).isString().isEmail().withMessage('Email Must Be Valid!'),
  body(['password']).isString().isLength({ min: 6, max: 12 }).withMessage('Password Must Be Min 5 Character and Max 12 Character!'),
]