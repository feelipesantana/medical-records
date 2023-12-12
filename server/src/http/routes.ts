/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  type FastifyInstance,
  type FastifyReply,
  type FastifyRequest
} from 'fastify'
import { LoginController } from './controllers/LoginController'
import { CreateUserController } from './controllers/UserController'
import { CreateAppointmentController, FindAllAppointmentController } from './controllers/AppointmentController'

export async function appRoutes (app: FastifyInstance) {
  // Routes
  app.post('/auth', LoginController)
  app.post('/register', CreateUserController)
  app.post('/appointment', CreateAppointmentController)

  app.get('/appointment', FindAllAppointmentController)

  // { preHandler: checkToken }

  async function checkToken (request: FastifyRequest, reply: FastifyReply) {
    const authHeader = request.headers.authorization
    const token: string | undefined = authHeader?.split(' ')[1]

    if (token === undefined) {
      return await reply.status(401).send({ msg: 'Acesso negado' })
    }
  }
}
