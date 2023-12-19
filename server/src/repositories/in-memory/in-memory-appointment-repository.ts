import { type Appointment } from '../../entities/appointment'
import { type AppointmentRepository } from '../AppointmentRepository'

export class InMemoryAppointmentRepository implements AppointmentRepository {
  private readonly items: Appointment[] = []

  async create (appointment: Appointment): Promise<Appointment> {
    this.items.push(appointment)
    return appointment
  }

  async findAll (): Promise<Appointment[]> {
    return this.items
  }

  // async findByData(data: string): Promise<Appointment[] | null>{
  //   this.items.find(res => data === this.items.)
  // }
}
