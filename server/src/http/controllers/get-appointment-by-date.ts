import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"
import { makeGetAppointmentsByDateFactory } from "../../use-cases/factory/make-get-appointments-by-date"
import { UnauthorizedError } from "../../errors/unauthorized"

export async function getAppointmentByDateController (request: FastifyRequest, reply: FastifyReply) {

  const doctorId = request.user.id

  if (!doctorId) {
    throw new UnauthorizedError()
  }

  const createSchemaBody = z.object({
    date: z.string()
  })

  const {date} = createSchemaBody.parse(request.query)

  try {
    const appointmentFactory = makeGetAppointmentsByDateFactory()

    const findAllAppointment = await appointmentFactory.execute({
      date: new Date(date),
      doctorId
    })

    return await reply.status(200).send(findAllAppointment)
  } catch (error) {
    throw new Error("Erro")
  }
}
