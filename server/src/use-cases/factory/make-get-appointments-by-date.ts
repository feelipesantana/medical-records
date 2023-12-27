import { PrismaAppointmentRepositor } from "../../repositories/prisma/PrismaAppointmentRepository";
import { GetAppointmentsByDateUseCase } from "../get-appointments-by-date";

export function makeGetAppointmentsByDateFactory(){

  const prismaAppointmentRepository = new PrismaAppointmentRepositor();
  const getAppointmentsByDate = new GetAppointmentsByDateUseCase(prismaAppointmentRepository)

  return getAppointmentsByDate
}