// import { Request, Response, NextFunction } from 'express';
// import { CreateUserServices } from './UsersServices';
// import { error } from 'console';

// export const CreateUserControllers = async (

// import { ComparePassword, HashPassword } from '../../helpers/Hashing';
// import { createToken } from '@/helpers/Token';

// export const registerUsers = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const { email, password, roleId } = req.body;

//     const createdUsers = await CreateUserServices({ email, password });
//     const { email, password } = req.body;
//     const hashedPassword = await HashPassword({ password });
//     const createdNewDataUsers = await CreateUserServices({
//       email,
//       password: hashedPassword,
//     });

//     const accessToken = await createToken({ uid: createdNewDataUsers.uid });

//     res.status(200).send({
//       error: false,
//       message: 'Create Account Success!',
//       data: createdUsers,
//       data: createdNewDataUsers,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
