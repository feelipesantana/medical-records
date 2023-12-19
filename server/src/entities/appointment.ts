import { Entity } from '../core/domain/Entity'

export interface AppointmentProps {
  startTime: Date
  endTime: Date
  patientId: string
  patientName: string
  description: string
  doctorId: string
  createdAt?: Date
}

export class Appointment extends Entity<AppointmentProps> {
  private constructor (props: AppointmentProps, id?: string) {
    super(props)
  }

  static create (props: AppointmentProps, id?: string) {
    const createAppointment = new Appointment(props, id)

    return createAppointment
  }
}
