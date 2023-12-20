import { type FastifyReply, type FastifyRequest } from 'fastify'
import { makeGetAppointmentsFactory } from '../../use-cases/factory/make-get-appointment'

export async function getAppointmentController (request: FastifyRequest, reply: FastifyReply) {
  try {
    const appointmentFactory = makeGetAppointmentsFactory()

    const findAllAppointment = await appointmentFactory.execute()

    return await reply.status(200).send(findAllAppointment)
  } catch (error) {
    throw new RequiredParametersErros('Error', 500)
  }
}
