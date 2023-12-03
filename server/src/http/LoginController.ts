import { FastifyReply, FastifyRequest } from "fastify";
import z from 'zod'
import { AuthFactory } from "../use-cases/factory/AuthFactory";
export function LoginController(request:FastifyRequest, reply:FastifyReply){
  const createSchemaBody = z.object({
    username: z.string(),
    password: z.string()
  })

  const {username, password} = createSchemaBody.parse(request.body)

  const authFactory = AuthFactory()



}