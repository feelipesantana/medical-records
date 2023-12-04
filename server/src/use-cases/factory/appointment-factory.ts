import { PrismaAppointmentRepositor } from '../../repositories/prisma/PrismaAppointmentRepository'
import { CreateAppointmentUseCase } from '../create-appointment-use-case'

export function AppointmentFactory () {
  const prismaAppointmentRepository = new PrismaAppointmentRepositor()
  const createAppointmentUseCase = new CreateAppointmentUseCase(prismaAppointmentRepository)

  return createAppointmentUseCase
}
