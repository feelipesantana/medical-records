import { type HookHandlerDoneFunction, type FastifyReply, type FastifyRequest } from 'fastify'
import { makeValidadeTokenUseCase } from '../use-cases/factory/make-validate-token'

export const authMiddleware = async (request: FastifyRequest, reply: FastifyReply) => {
  const { authorization } = request.headers

  if (!authorization) {
    await reply.status(401).send({ error: 'Unauthorized' })
    throw new Error('Unauthorized')
  }
  const token: string | undefined = authorization?.split(' ')[1]

  if (token === undefined) {
    await reply.status(401).send({ error: 'Unauthorized' })
    throw new Error('Unauthorized')
  }

  const makeValidateToken = makeValidadeTokenUseCase()

  const user = await makeValidateToken.execute({
    token
  })

  if (!user) {
    await reply.status(401).send({ error: 'Unauthorized' })
    throw new Error('Unauthorized')
  }

  request.user = user
}
