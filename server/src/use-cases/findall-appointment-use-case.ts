import { type Appointment } from '@prisma/client'
import { type AppointmentRepository } from '../repositories/AppointmentRepository'
import { RequiredParametersErros } from '../errors/RequiredParametersErros'

type CreateAppointmentUseCaseResponse = Appointment[]

export class FindAllAppointmentUseCase {
  constructor (private readonly appointmentRepository: AppointmentRepository) {}
  async execute (): Promise<CreateAppointmentUseCaseResponse> {
    const findAllAppointment = await this.appointmentRepository.findAll()

    if (!findAllAppointment) {
      throw new RequiredParametersErros('Erro na criação do apontamento', 409)
    }
    return findAllAppointment
  }
}
