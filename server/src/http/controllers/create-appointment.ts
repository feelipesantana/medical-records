import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateAppointment } from '../../use-cases/factory/make-create-appointment'

export async function createAppointmentController (request: FastifyRequest, reply: FastifyReply) {
  const createSchemaBody = z.object({
    date: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    userId: z.string(),
    patientId: z.string(),
    patientName: z.string(),
    description: z.string()
  })

  const { date, startTime, endTime, patientId, patientName, userId, description } = createSchemaBody.parse(request.body)
  try {
    const appointmentFactory = makeCreateAppointment()

    const createAppointment = await appointmentFactory.execute({
      date,
      startTime,
      endTime,
      userId,
      patientId,
      patientName,
      description
    })

    return await reply.status(201).send(createAppointment)
  } catch (error) {
    throw new RequiredParametersErros('Error')
  }
}
