/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type FastifyRequest, type FastifyInstance, type FastifyReply, type HookHandlerDoneFunction } from 'fastify'
import { authenticateController } from './controllers/authenticate'
import { createUserController } from './controllers/create-user'
import { getAppointmentController } from './controllers/get-appointment'
import { makeValidadeTokenUseCase } from '../use-cases/factory/make-validate-token'
import { authMiddleware } from '../middleware/authMiddleware'

export async function appRoutes (app: FastifyInstance) {
  // Routes
  app.post('/auth', authenticateController)
  app.post('/register', createUserController)
  app.get('/appointment', { preHandler: authMiddleware }, getAppointmentController)

}
