import { FastifyPluginAsync } from "fastify"
import { comparePassword, hashPassword } from "../../utils/parsePassword"
import { LoginQuery, RegisterBody } from "./types"

const auth : FastifyPluginAsync = async(fastify , options) => 
{
  // Register Route

  fastify.post<{ Body : RegisterBody }>("/register" , async(request , reply) => 
  {
    const { body : userInfo }  = request
    const { email , name , password } = userInfo

    if(!email || !name || !password)
    {
      throw fastify.httpErrors.unauthorized("You have to pass needed information")
    }

    const hashedPassword = await hashPassword(password)

    userInfo.password = hashedPassword
    

    return await fastify.store.User.create(userInfo , (err , data) => 
    {
      if(err || !data)
      {
        throw fastify.httpErrors.createError({ msg : "Error to cregister an new user" , err })
      }

      return reply.status(201).send(data)
    })
    
  })
  // Login Route
  fastify.get<{Querystring : LoginQuery}>("/login" , async(request , reply) =>
  {
    const { email , password } = request.query

    if(!email  || !password)
    {
      throw fastify.httpErrors.unauthorized("You have to give us your email and password")
    }

    const user = await fastify.store.User.findOne({ email : email })

    if(!user)
    {
      throw fastify.httpErrors.notAcceptable()
    }

    const isCorrectPassword = await comparePassword(password , user?.password)

    if(!isCorrectPassword)
    {
      throw fastify.httpErrors.unauthorized("You've wrong your email or password")
    }

    return reply.status(200).send(user)

  })

}

export default auth