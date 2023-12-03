import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export function CreateUserController(request: FastifyRequest, reply: FastifyReply){

  const CreateUserSchemaBody = z.object({
    name: z.string().max(50),
    email: z.string().email(),
    password: z.string(),
  })
}