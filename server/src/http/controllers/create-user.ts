import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateUser } from '../../use-cases/factory/make-create-user'
import { UserAlreadyExists } from '../../errors/user-already-exists-error'
import { CreateError } from '../../errors/create-error'

enum AccessType {
  ADMIN = 'ADMIN',
  DOCTOR = 'DOCTOR'
}
export async function createUserController (request: FastifyRequest, reply: FastifyReply) {
  const createUserSchemaBody = z.object({
    name: z.string().max(50),
    email: z.string().email(),
    age: z.number().max(99, 'No máximo 99 anos'),
    document: z.string(),
    securityNumber: z.string().max(15),
    username: z.string().max(18),
    password: z.string().max(20).min(8),
    confirmPassword: z.string().max(20).min(8),
    accessType: z.nativeEnum(AccessType)
  }).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'As senhas não conferem'
      })
    }
  })

  const { name, age, email, document, securityNumber, accessType, username, confirmPassword } = createUserSchemaBody.parse(request.body)
  try {
    const userFactory = makeCreateUser()

    const createUser = await userFactory.execute({
      name,
      age,
      email,
      document,
      securityNumber,
      accessType,
      username,
      password: confirmPassword

    })
    return await reply.status(201).send(createUser)
  } catch (error) {
    if (error instanceof UserAlreadyExists) {
      return await reply.status(409).send({ error: error.message })
    }
    if (error instanceof CreateError) {
      return await reply.status(500).send({ error: error.message })
    }

    return await reply.status(500).send({ error: 'Erro interno do servidor' })
  }
}
