import { type Appointment, type Prisma } from '@prisma/client'

export interface AppointmentRepository {
  create: (data: Prisma.AppointmentUncheckedCreateInput) => Promise<Appointment>
  delete: (id:string) => Promise<Appointment[] | null>
  findByDoctorId: (doctorId: string) => Promise<Appointment[] | null>

  findAll: (doctorId: string) => Promise<Appointment[] | null>
  findByDate: (date: Date, doctorId:string) => Promise<Appointment[] | null>
  findOverlappingAppointment: (doctorId: string, startTime: Date, endTime: Date) => Promise<Appointment[] | null>
  
}
