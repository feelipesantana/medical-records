import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { CreateUserFactory } from "../../use-cases/factory/UserFactory";

enum AccessType {
  ADMIN = 'ADMIN',
  DOCTOR = 'DOCTOR'
}
export function CreateUserController(request: FastifyRequest, reply: FastifyReply){

  const createUserSchemaBody = z.object({
    name: z.string().max(50),
    email: z.string().email(),
    age: z.number().max(99, "No máximo 99 anos"),
    document: z.string(),
    securityNumber: z.string().max(15),
    username: z.string().max(18),
    password: z.string().max(20).min(8),
    confirmPassword: z.string().max(20).min(8),
    accessType: z.nativeEnum(AccessType),
  }).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match"
      });
    }
  });

  const {name,age,email,document,securityNumber,accessType,username,confirmPassword} = createUserSchemaBody.parse(request.body)
  try{
    const userFactory = CreateUserFactory()
    
    const createUser = userFactory.execute({
      name,
      age,
      email,
      document,
      securityNumber,
      accessType,
      username,
      password:confirmPassword
      
    })

    return reply.status(201).send(createUser)
  } catch(err){
    return reply.status(400).send({error: err})
  }


}