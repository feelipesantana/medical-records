import { type Appointment } from '@prisma/client'
import { type AppointmentRepository } from '../repositories/AppointmentRepository'
import { SearchError } from '../errors/search-error'

interface CreateAppointmentUseCaseRequest {
  doctorId: string
}

type CreateAppointmentUseCaseResponse = Appointment[]

export class GetAppointmentsUseCase {
  constructor (private readonly appointmentRepository: AppointmentRepository) {}

  async execute ({ doctorId }: CreateAppointmentUseCaseRequest): Promise<CreateAppointmentUseCaseResponse> {
    const findAllAppointment = await this.appointmentRepository.findAll(doctorId)

    if (!findAllAppointment) {
      throw new SearchError()
    }
    return findAllAppointment
  }
}
