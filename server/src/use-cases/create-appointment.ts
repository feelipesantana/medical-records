import { type Appointment } from '@prisma/client'
import { type AppointmentRepository } from '../repositories/AppointmentRepository'
import { CreateError } from '../errors/create-error'
import { CreateAppointmentOverlappingError } from '../errors/create-appointment-overlapping-error'

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

    console.log("appointmentOverlapping result:", appointmentOverlapping)


    if (appointmentOverlapping && appointmentOverlapping?.length > 0){
      throw new CreateAppointmentOverlappingError()
    }

    const createAppointment = await this.appointmentRepository.create({
      startsAt,
      endsAt,
      doctorId,
      patientId,
      description
    })

    if (!createAppointment) {
      throw new CreateError()
    }
    return createAppointment
  }
}
