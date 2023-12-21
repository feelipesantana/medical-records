import { type Appointment } from '@prisma/client'
import { type AppointmentRepository } from '../repositories/AppointmentRepository'

interface CreateAppointmentUseCaseRequest {
  startsAt: Date
  endsAt: Date
  doctorId: string
  patientId: string
  description: string
}

type CreateAppointmentUseCaseResponse = Appointment

export class CreateAppointmentUseCase {
  constructor (private readonly appointmentRepository: AppointmentRepository) {}
  async execute ({ startsAt, endsAt, doctorId, patientId, description }: CreateAppointmentUseCaseRequest): Promise<CreateAppointmentUseCaseResponse> {
    const appointmentOverlapping = await this.appointmentRepository.findOverlappingAppointment(doctorId, startsAt, endsAt)

    if (appointmentOverlapping) {
      throw new Error('Error')
    }

    const createAppointment = await this.appointmentRepository.create({
      startsAt,
      endsAt,
      doctorId,
      patientId,
      description
    })

    if (!createAppointment) {
      throw new Error()
    }
    return createAppointment
  }
}
