import bycrypt from 'bcrypt';
const saltRounds = 10;

interface IHashPasswordParams{
  password: string
}

export const HashPassword = async({password}: IHashPasswordParams) => {
  return await bycrypt.hash(password, saltRounds)
}

interface IComparePasswordParams{
  passwordFromClient: string,
  passwordFromDatabase: string
}

export const ComparePassword = async({passwordFromClient, passwordFromDatabase}: IComparePasswordParams) => {
  return await bycrypt.compare(passwordFromClient, passwordFromDatabase)
}