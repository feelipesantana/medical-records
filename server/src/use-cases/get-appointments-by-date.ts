import { type Appointment } from '@prisma/client'
import { type AppointmentRepository } from '../repositories/AppointmentRepository'
import { RequiredParametersErros } from '../errors/RequiredParametersErros'

interface GetAppointmentsDateRequest {
  date: string
}

type GetAppointmentsDateResponse = Appointment[]

export class getAppointmentsByDateUseCase {
  constructor (private readonly appointmentRepository: AppointmentRepository) {}

  async execute ({ date }: GetAppointmentsDateRequest): Promise<GetAppointmentsDateResponse> {
    const getAppointmentsDate = await this.appointmentRepository.findByDate(date)

    if (!getAppointmentsDate) {
      throw new RequiredParametersErros('Erro na busta de dados')
    }

    return getAppointmentsDate
  }
}
