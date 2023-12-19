import { type Appointment } from '@prisma/client'
import { type AppointmentRepository } from '../repositories/AppointmentRepository'
import { RequiredParametersErros } from '../errors/RequiredParametersErros'

interface CreateAppointmentUseCaseRequest {
  startTime: Date
  endTime: Date
  doctorId: string
  patientId: string
  patientName: string
  description: string
}

type CreateAppointmentUseCaseResponse = Appointment

export class CreateAppointmentUseCase {
  constructor (private readonly appointmentRepository: AppointmentRepository) {}
  async execute (data: CreateAppointmentUseCaseRequest): Promise<CreateAppointmentUseCaseResponse> {
    const newDateReceived = new Date(data.date)
    console.log(newDateReceived)

    const createAppointment = await this.appointmentRepository.create({
      startTime: data.startTime,
      endTime: data.endTime,
      userId: data.doctorId,
      patientId: data.patientId,
      patientName: data.patientName,
      description: data.description
    })

    if (!createAppointment) {
      throw new RequiredParametersErros('Erro na criação do apontamento', 409)
    }
    return createAppointment
  }
}
