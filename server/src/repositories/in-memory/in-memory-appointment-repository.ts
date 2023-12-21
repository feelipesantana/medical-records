import { type Prisma, type Appointment } from '@prisma/client'
import { type AppointmentRepository } from '../AppointmentRepository'
import { randomUUID } from 'crypto'
import { areIntervalsOverlapping } from 'date-fns'

export class InMemoryAppointmentRepository implements AppointmentRepository {
  private readonly items: Appointment[] = []

  async create (appointment: Prisma.AppointmentUncheckedCreateInput): Promise<Appointment> {
    const newAppointment = {
      id: randomUUID(),
      startsAt: appointment.startsAt,
      endsAt: appointment.endsAt,
      doctorId: appointment.doctorId,
      patientId: appointment.patientId,
      description: appointment.description,
      createdAt: new Date()
    }

    this.items.push(newAppointment)

    return newAppointment
  }

  async findAll (doctorId: string): Promise<Appointment[] | null> {
    const getAllAppointmentsByDoctor = await this.findByDoctorId(doctorId)

    console.log(getAllAppointmentsByDoctor)
    if (!getAllAppointmentsByDoctor) {
      return null
    }

    return getAllAppointmentsByDoctor
  }

  async findByDate (startsAt: Date): Promise<Appointment | null> {
    const findAppointments = this.items.find(res => res.startsAt === startsAt)
    if (!findAppointments) {
      throw Error()
    }

    return findAppointments
  }

  async findByDoctorId (doctorId: string): Promise<Appointment[] | null> {
    const findAppointmentsByDoctorId = this.items.filter(res => res.doctorId === doctorId)

    if (!findAppointmentsByDoctorId) {
      return null
    }

    return findAppointmentsByDoctorId
  }

  async findOverlappingAppointment (doctorId: string, startTime: Date, endTime: Date): Promise<Appointment[] | null> {
    const doctorAppointments = await this.findByDoctorId(doctorId)

    if (!doctorAppointments) {
      return null
    }

    const overlappingAppointments: Appointment[] = doctorAppointments.filter(appointment => {
      return areIntervalsOverlapping(
        { start: startTime, end: endTime },
        { start: appointment.startsAt, end: appointment.endsAt },
        { inclusive: true }
      )
    })

    if (!overlappingAppointments) {
      return null
    }

    return overlappingAppointments
  }
}
