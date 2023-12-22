/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type FastifyRequest, type FastifyInstance, type FastifyReply } from 'fastify'

import { authenticateController } from './controllers/authenticate'
import { createUserController } from './controllers/create-user'
import { getAppointmentController } from './controllers/get-appointment'
import { authMiddleware } from '../middleware/authMiddleware'
import { makeValidadeTokenUseCase } from '../use-cases/factory/make-validate-token'
export async function appRoutes (app: FastifyInstance) {
  // Routes
  app.post('/auth', authenticateController)
  app.post('/register', createUserController)

  app.get('/appointment', { preHandler: checkToken }, getAppointmentController)

  // { preHandler: checkToken }

  async function checkToken (request: FastifyRequest, reply: FastifyReply) {
    const { authorization } = request.headers
    const token: string | undefined = authorization?.split(' ')[1]

    console.log(token)
    if (token === undefined) {
      return await reply.status(401).send({ msg: 'Acesso negado' })
    }

    const makeValidateToken = makeValidadeTokenUseCase()

    const user = await makeValidateToken.execute({
      token
    })

    if (!user) {
      return await reply.status(404).send({ msg: 'Acesso negado' })
    }

    request.user = user
  }
}
