import * as bcrypt from "bcrypt"


export const hashPassword = async (password : string) =>
{
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password , salt) 
  
  return hashedPassword
}

export const comparePassword = async(password : string , hash : string) => 
{
  const isCorrectPassword = await bcrypt.compare(password , hash)

  return isCorrectPassword
}