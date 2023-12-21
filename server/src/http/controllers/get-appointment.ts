import { type FastifyReply, type FastifyRequest } from 'fastify'
import { makeGetAppointmentsFactory } from '../../use-cases/factory/make-get-appointment'
import { z } from 'zod'
import { SearchError } from '../../errors/search-error'

export async function getAppointmentController (request: FastifyRequest, reply: FastifyReply) {
  const zodSchema = z.object({
    doctorId: z.string()
  })

  const { doctorId } = zodSchema.parse(request.query)
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
