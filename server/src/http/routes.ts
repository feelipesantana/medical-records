/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  type FastifyInstance,
  type FastifyReply,
  type FastifyRequest
} from 'fastify'
import { authenticateController } from './controllers/authenticate'
import { createUserController } from './controllers/create-user'
import { createAppointmentController } from './controllers/create-appointment'
import { getAppointmentController } from './controllers/get-appointment'

export async function appRoutes (app: FastifyInstance) {
  // Routes
  app.post('/auth', authenticateController)
  app.post('/register', createUserController)
  app.post('/appointment', createAppointmentController)

  app.get('/appointment', getAppointmentController)

  // { preHandler: checkToken }

  async function checkToken (request: FastifyRequest, reply: FastifyReply) {
    const authHeader = request.headers.authorization
    const token: string | undefined = authHeader?.split(' ')[1]

    if (token === undefined) {
      return await reply.status(401).send({ msg: 'Acesso negado' })
    }
  }
}
