import { Appointment } from "@prisma/client";
import { AppointmentRepository } from "../repositories/AppointmentRepository";
import { SearchError } from "../errors/search-error";
import { format } from "date-fns";

interface GetAppointmentsByDateRequest{
  date:Date;
  doctorId:string;
}

type GetAppointmentsByDateResponse = Appointment[]
export class GetAppointmentsByDate{
  constructor(private appointmentRepository: AppointmentRepository ){}

  async execute({date,doctorId}:GetAppointmentsByDateRequest):Promise<GetAppointmentsByDateResponse>{
    

    const getAllByDate = await this.appointmentRepository.findByDate(date, doctorId)

    if(!getAllByDate){
      throw new SearchError()
    }

    return getAllByDate
  }
}