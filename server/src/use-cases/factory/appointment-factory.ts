import { PrismaAppointmentRepositor } from '../../repositories/prisma/PrismaAppointmentRepository'
import { CreateAppointmentUseCase } from '../create-appointment-use-case'
import { FindAllAppointmentUseCase } from '../findall-appointment-use-case'

export function CreateAppointmentFactory () {
  const prismaAppointmentRepository = new PrismaAppointmentRepositor()
  const createAppointmentUseCase = new CreateAppointmentUseCase(prismaAppointmentRepository)

  return createAppointmentUseCase
}

export function FindAllAppointmentFactory () {
  const prismaAppointmentRepository = new PrismaAppointmentRepositor()
  const findAllAppointmentUseCase = new FindAllAppointmentUseCase(prismaAppointmentRepository)

  return findAllAppointmentUseCase
}
