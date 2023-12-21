import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateAppointment } from '../../use-cases/factory/make-create-appointment'
import { CreateError } from '../../errors/create-error'

export async function createAppointmentController (request: FastifyRequest, reply: FastifyReply) {
  const createSchemaBody = z.object({
    date: z.string(),
    startsAt: z.date(),
    endsAt: z.date(),
    doctorId: z.string(),
    patientId: z.string(),
    description: z.string()
  })

  const { startsAt, endsAt, patientId, doctorId, description } = createSchemaBody.parse(request.body)
  try {
    const appointmentFactory = makeCreateAppointment()

    const createAppointment = await appointmentFactory.execute({
      startsAt,
      endsAt,
      doctorId,
      patientId,
      description
    })

    return await reply.status(201).send(createAppointment)
  } catch (error) {
    if (error instanceof CreateError) {
      return await reply.status(500).send({ error: error.message })
    }
  }
}
