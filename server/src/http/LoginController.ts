import { FastifyReply, FastifyRequest } from "fastify";
import z from 'zod'
import { AuthFactory } from "../use-cases/factory/AuthFactory";
export async function LoginController(request:FastifyRequest, reply:FastifyReply){
  const createSchemaBody = z.object({
    username: z.string(),
    password: z.string()
  })

  const {username, password} = createSchemaBody.parse(request.body)


  try{
    const authFactory = AuthFactory()

    const findUser = await authFactory.execute({username,password})

    return reply.status(200).send(findUser);

  }catch(err){
    console.error(err)
    return reply.status(500).send()
  }



}