import { type Appointment, type Prisma } from '@prisma/client'
import { type AppointmentRepository } from '../AppointmentRepository'
import { prisma } from '../../lib/prisma'

export class PrismaAppointmentRepositor implements AppointmentRepository {
  async create (data: Prisma.AppointmentUncheckedCreateInput): Promise<Appointment> {
    const createAppointment = await prisma.appointment.create({
      data: {
        date: data.date,
        startTime: data.startTime,
        endTime: data.endTime,
        userId: data.userId,
        patientId: data.patientId,
        patientName: data.patientName
      }
    })

    return createAppointment
  }
}
