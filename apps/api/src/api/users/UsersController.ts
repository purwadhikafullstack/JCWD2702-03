import { Request, Response, NextFunction } from "express";
import { CreateUserServices } from "./UsersServices";
import { error } from "console";

export const CreateUserControllers = async (req: Request, res: Response, next: NextFunction) =>{
  try {
    const { email, password, roleId } = req.body

    const createdUsers = await CreateUserServices({email, password, roleId})

    res.status(200).send({
      error:false,
      message: 'Create Account Success!',
      data: createdUsers
    })
  } catch (error) {
    next(error)
  }
}