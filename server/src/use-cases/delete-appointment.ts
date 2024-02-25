import { Appointment } from "@prisma/client"
import { AppointmentRepository } from "../repositories/AppointmentRepository"
import { DeleteError } from "../errors/delete-error"

interface UseCaseDeleteAppointmentRequest{
    id: string
}
type UseCaseDeleteAppointmentResponse = Appointment[] | null

export class UseCaseDeleteAppointment{
    constructor(private appointmentRepository: AppointmentRepository){}

    async execute({id}: UseCaseDeleteAppointmentRequest): Promise<UseCaseDeleteAppointmentResponse>{
        const deleteAppointment = await this.appointmentRepository.delete(id)

        if(!deleteAppointment){
            throw new DeleteError()
        }
        
        return deleteAppointment
    }
}