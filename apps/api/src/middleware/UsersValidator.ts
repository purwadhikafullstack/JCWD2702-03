import { body } from 'express-validator';

export const validatorCreateUsers = [
  body(['email', 'firstName', 'lastName', ])
    .notEmpty()
    .withMessage('Data Must Be Completed!'),
  body(['firstName'])
    .isString()
    .isLength({ min: 1, max: 20 })
    .withMessage('Firstname Required!'),
  body(['lastName'])
    .isString()
    .isLength({ min: 1, max: 20 })
    .withMessage('Lastname Required!'),
  body(['email']).isString().isEmail().withMessage('Email Must Be Valid!'),
];
