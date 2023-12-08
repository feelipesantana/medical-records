import { type Appointment, type Prisma } from '@prisma/client'
import { type AppointmentRepository } from '../AppointmentRepository'
import { prisma } from '../../lib/prisma'

export class PrismaAppointmentRepositor implements AppointmentRepository {
  async create (data: Prisma.AppointmentUncheckedCreateInput): Promise<Appointment> {
    console.log('OLA')
    console.log(data)
    const createAppointment = await prisma.appointment.create({
      data: {
        date: data.date,
        startTime: data.startTime,
        endTime: data.endTime,
        userId: data.userId,
        patientId: data.patientId,
        patientName: data.patientName,
        description: data.description
      }
    })

    return createAppointment
  }

  async findAll (): Promise<Appointment[] | null> {
    const findAllAppointments = await prisma.appointment.findMany()

    return findAllAppointments
  }

  async findByDate (date: string): Promise<Appointment[] | null> {
    const findManyAppointmentByDate = await prisma.appointment.findMany({
      where: {
        date
      }
    })

    return findManyAppointmentByDate
  }
}
