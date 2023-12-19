import { PrismaAppointmentRepositor } from '../../repositories/prisma/PrismaAppointmentRepository'
import { GetAppointmentsUseCase } from '../get-appointments'

export function makeGetAppointmentsFactory () {
  const prismaAppointmentRepository = new PrismaAppointmentRepositor()
  const getAppointments = new GetAppointmentsUseCase(prismaAppointmentRepository)

  return getAppointments
}
