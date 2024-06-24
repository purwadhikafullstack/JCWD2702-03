import { NextFunction, Request, Response } from "express";
import { CreateRoleServices } from "./RoleServices";

export const CreateRoleController = async (req: Request, res: Response, next: NextFunction) =>{
  try {
    const { role } = req.body;

    const createdRole = await CreateRoleServices({role})

    res.status(200).send({
      error: false,
      massage: "Create Role Success!",
      data: createdRole
    })
  } catch (error) {
    next(error)
  }
}