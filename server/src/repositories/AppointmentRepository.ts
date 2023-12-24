import { type Appointment, type Prisma } from '@prisma/client'

export interface AppointmentRepository {
  create: (data: Prisma.AppointmentUncheckedCreateInput) => Promise<Appointment>
  findAll: (doctorId: string) => Promise<Appointment[] | null>
  // findByDate: (date: Date) => Promise<Appointment | null>
  findByDoctorId: (doctorId: string) => Promise<Appointment[] | null>
  findOverlappingAppointment: (doctorId: string, startTime: Date, endTime: Date) => Promise<Appointment[] | null>
}
