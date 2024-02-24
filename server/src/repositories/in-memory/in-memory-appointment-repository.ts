import { type Prisma, type Appointment } from '@prisma/client'
import { type AppointmentRepository } from '../AppointmentRepository'
import { randomUUID } from 'crypto'
import { checkTimeOverlap } from '../../utils/checkTimeOverlapping'
import { formatTimeZone } from '../../utils/getDateTimeZone'

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
  async findByDoctorId (doctorId: string): Promise<Appointment[] | null> {
    const findAppointmentsByDoctorId = this.items.filter(res => res.doctorId === doctorId)

    if (!findAppointmentsByDoctorId) {
      return null
    }

    return findAppointmentsByDoctorId
  }

  async findAll (doctorId: string): Promise<Appointment[] | null> {
    const getAllAppointmentsByDoctor = await this.findByDoctorId(doctorId)

    if (!getAllAppointmentsByDoctor) {
      return null
    }

    return getAllAppointmentsByDoctor
  }

  async findByDate (date: Date, doctorId:string): Promise<Appointment[] | null> {
    const getAllAppointmentsByDoctor = await this.findByDoctorId(doctorId)
    
    if (!getAllAppointmentsByDoctor) {
      throw Error()
    }
    const formattedDate = formatTimeZone(date)

    const getByDate =  getAllAppointmentsByDoctor.filter(res => formatTimeZone(res.startsAt) === formattedDate)

    return getByDate
  }

 

  async findOverlappingAppointment (doctorId: string, startTime: Date, endTime: Date): Promise<Appointment[] | null> {
    const doctorAppointments = await this.findByDoctorId(doctorId)

    if (!doctorAppointments) {
      return null
    }
    
    const overlappingAppointments: Appointment[] = doctorAppointments.filter(appointment => {
      return checkTimeOverlap(appointment.startsAt,appointment.endsAt,startTime,endTime )
    })

    
    return overlappingAppointments
  }
}
