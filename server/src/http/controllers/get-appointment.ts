import { type FastifyRequest, type FastifyReply } from 'fastify'
import { makeGetAppointmentsFactory } from '../../use-cases/factory/make-get-appointment'
import { SearchError } from '../../errors/search-error'

export async function getAppointmentController (request: FastifyRequest, reply: FastifyReply) {
  const doctorId = request.user.id

  if (!doctorId) {
    throw new Error('Erro no recebimento do id')
  }

  try {
    const appointmentFactory = makeGetAppointmentsFactory()

    const findAllAppointment = await appointmentFactory.execute({
      doctorId
    })

    return await reply.status(200).send(findAllAppointment)
  } catch (error) {
    if (error instanceof SearchError) {
      return await reply.status(404).send({ message: error.message })
    }

    return await reply.status(500).send(error)
  }
}
