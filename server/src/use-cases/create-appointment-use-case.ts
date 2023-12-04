import { type Appointment } from '@prisma/client'
import { type AppointmentRepository } from '../repositories/AppointmentRepository'
import { RequiredParametersErros } from '../errors/RequiredParametersErros'

interface CreateAppointmentUseCaseRequest {
  date: Date
  startTime: string
  endTime: string
  userId: string
  patientId: string
  patientName: string
}

type CreateAppointmentUseCaseResponse = Appointment

export class CreateAppointmentUseCase {
  constructor (private readonly appointmentRepository: AppointmentRepository) {}
  async execute (data: CreateAppointmentUseCaseRequest): Promise<CreateAppointmentUseCaseResponse> {
    const createAppointment = await this.appointmentRepository.create({
      date: data.date,
      startTime: data.startTime,
      endTime: data.endTime,
      userId: data.userId,
      patientId: data.patientId,
      patientName: data.patientName
    })

    if (!createAppointment) {
      throw new RequiredParametersErros('Erro na criação do apontamento', 409)
    }
    return createAppointment
  }
}
