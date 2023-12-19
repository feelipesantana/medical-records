import { type Appointment } from '../entities/appointment'

export interface AppointmentRepository {
  create: (data: Appointment) => Promise<Appointment>
  findAll: () => Promise<Appointment[] | null>
  // findByDate: (date: string) => Promise<Appointment[] | null>
}
