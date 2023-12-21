import { type AppointmentRepository } from '../AppointmentRepository'
import { prisma } from '../../lib/prisma'
import { type Prisma, type Appointment } from '@prisma/client'

export class PrismaAppointmentRepositor implements AppointmentRepository {
  async create (data: Prisma.AppointmentUncheckedCreateInput): Promise<Appointment> {
    const createAppointment = await prisma.appointment.create({
      data: {
        startsAt: data.startsAt,
        endsAt: data.endsAt,
        doctorId: data.doctorId,
        patientId: data.patientId,
        description: data.description
      }
    })

    return createAppointment
  }

  async findAll (): Promise<Appointment[] | null> {
    const findAllAppointments = await prisma.appointment.findMany()

    return findAllAppointments
  }

  async findByDoctorId (doctorId: string): Promise<Appointment[] | null> {
    const findManyAppointmentByDate = await prisma.appointment.findMany({
      where: {
        doctorId
      }
    })

    return findManyAppointmentByDate
  }

  async findOverlappingAppointment (doctorId: string, startAt: Date, endAt: Date): Promise<Appointment[] | null> {
    const findAppointments = await prisma.appointment.findMany({
      where: {
        AND: [
          {
            doctorId
          },
          {
            startsAt: {
              gte: startAt
            }
          },
          {
            endsAt: {
              lte: endAt
            }
          }
        ]
      }
    })

    return findAppointments
  }
}
