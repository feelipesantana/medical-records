import { type HookHandlerDoneFunction, type FastifyReply, type FastifyRequest } from 'fastify'
import { makeValidadeTokenUseCase } from '../use-cases/factory/make-validate-token'

export async function authMiddleware (request: FastifyRequest, reply: FastifyReply) {
  const { authorization } = request.headers

  const token = authorization?.split(' ')[1]

  if (!token) {
    return await reply.status(401).send({ message: 'Error' })
  }

  const makeValidateToken = makeValidadeTokenUseCase()

  const user = makeValidateToken.execute({
    token
  })

  request.user = user
}
