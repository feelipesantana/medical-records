import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { CreateAppointmentFactory, FindAllAppointmentFactory } from '../../use-cases/factory/appointment-factory'
import { RequiredParametersErros } from '../../errors/RequiredParametersErros'

export async function CreateAppointmentController (request: FastifyRequest, reply: FastifyReply) {
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
    const appointmentFactory = CreateAppointmentFactory()

    console.log('chegou aqui', date)
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

export async function FindAllAppointmentController (request: FastifyRequest, reply: FastifyReply) {
  try {
    const appointmentFactory = FindAllAppointmentFactory()

    const findAllAppointment = await appointmentFactory.execute()

    return await reply.status(200).send(findAllAppointment)
  } catch (error) {
    throw new RequiredParametersErros('Error', 500)
  }
}
