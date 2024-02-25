import { PrismaAppointmentRepositor } from "../../repositories/prisma/PrismaAppointmentRepository";
import { UseCaseDeleteAppointment } from "../delete-appointment";

export function MakeDeleteAppointment(){
    const prismaAppointment = new PrismaAppointmentRepositor()
    const deleteAppointment = new UseCaseDeleteAppointment(prismaAppointment)

    return deleteAppointment
}