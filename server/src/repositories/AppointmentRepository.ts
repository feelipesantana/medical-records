import { type Appointment, type Prisma } from '@prisma/client'

export interface AppointmentRepository {
  create: (data: Prisma.AppointmentUncheckedCreateInput) => Promise<Appointment>
  findAll: () => Promise<Appointment[] | null>
  findByDate: (date: string) => Promise<Appointment[] | null>
}
