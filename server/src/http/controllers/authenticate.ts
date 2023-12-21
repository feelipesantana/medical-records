import { type FastifyReply, type FastifyRequest } from 'fastify'
import z from 'zod'
import { makeAuthenticate } from '../../use-cases/factory/make-authenticate'
import { AuthenticateError } from '../../errors/authenticate-error'
export async function authenticateController (request: FastifyRequest, reply: FastifyReply) {
  const createSchemaBody = z.object({
    email: z.string(),
    password: z.string()
  })

  const { email, password } = createSchemaBody.parse(request.body)

  try {
    const authFactory = makeAuthenticate()

    console.log(email, password)
    const findUser = await authFactory.execute({ email, password })

    return await reply.status(200).send(findUser)
  } catch (err) {
    if (err instanceof AuthenticateError) {
      return await reply.status(404).send(err.message)
    }
    return await reply.status(500).send('Usuário não encontrado, verifique usuário ou senha se está correto')
  }
}
