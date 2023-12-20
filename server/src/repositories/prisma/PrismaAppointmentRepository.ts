import { type AppointmentRepository } from '../AppointmentRepository'
import { prisma } from '../../lib/prisma'
import { type Prisma, type Appointment } from '@prisma/client'

export class PrismaAppointmentRepositor implements AppointmentRepository {
  async create (data: Prisma.AppointmentUncheckedCreateInput): Promise<Appointment> {
    const createAppointment = await prisma.appointment.create({
      data: {
        startTime: data.startTime,
        endTime: data.endTime,
        doctorId: data.doctorId,
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

  async findByDate (startTime: string): Promise<Appointment[] | null> {
    const findManyAppointmentByDate = await prisma.appointment.findMany({
      where: {
        startTime
      }
    })

    return findManyAppointmentByDate
  }
}
