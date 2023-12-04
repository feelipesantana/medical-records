import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { AppointmentFactory } from '../../use-cases/factory/appointment-factory'
import { RequiredParametersErros } from '../../errors/RequiredParametersErros'

export async function AppointmentController (request: FastifyRequest, reply: FastifyReply) {
  const createSchemaBody = z.object({
    date: z.date(),
    startTime: z.string(),
    endTime: z.string(),
    userId: z.string(),
    patientId: z.string(),
    patientName: z.string()
  })

  const { date, startTime, endTime, patientId, patientName, userId } = createSchemaBody.parse(request.body)
  try {
    const appointmentFactory = AppointmentFactory()

    const createAppointment = await appointmentFactory.execute({
      date,
      startTime,
      endTime,
      userId,
      patientId,
      patientName
    })

    return await reply.status(201).send(createAppointment)
  } catch (error) {
    throw new RequiredParametersErros('Error')
  }
}
