import { type Appointment } from '@prisma/client'
import { type AppointmentRepository } from '../repositories/AppointmentRepository'
import { SearchError } from '../errors/search-error'

type CreateAppointmentUseCaseResponse = Appointment[]

export class GetAppointmentsUseCase {
  constructor (private readonly appointmentRepository: AppointmentRepository) {}

  async execute (): Promise<CreateAppointmentUseCaseResponse> {
    const findAllAppointment = await this.appointmentRepository.findAll()

    if (!findAllAppointment) {
      throw new SearchError()
    }
    return findAllAppointment
  }
}
