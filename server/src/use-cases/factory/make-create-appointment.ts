import { PrismaAppointmentRepositor } from '../../repositories/prisma/PrismaAppointmentRepository'
import { CreateAppointmentUseCase } from '../create-appointment'

export function makeCreateAppointment () {
  const prismaAppointmentRepository = new PrismaAppointmentRepositor()
  const createAppointmentUseCase = new CreateAppointmentUseCase(prismaAppointmentRepository)

  return createAppointmentUseCase
}
