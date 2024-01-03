import { Appointment } from "@prisma/client";
import { AppointmentRepository } from "../repositories/AppointmentRepository";
import { SearchError } from "../errors/search-error";
import { format } from "date-fns";
import moment from "moment-timezone";

interface GetAppointmentsByDateRequest{
  date:Date;
  doctorId:string;
}

type GetAppointmentsByDateResponse = Appointment[]
export class GetAppointmentsByDateUseCase{
  constructor(private appointmentRepository: AppointmentRepository ){}

  async execute({date,doctorId}:GetAppointmentsByDateRequest):Promise<GetAppointmentsByDateResponse>{
    

    // const dateArrived = moment(date, 'YYYY-MM-DD HH:mm:ss');
    // const dataEmUTC = dateArrived.clone().utc().format(); // Convertendo para UTC


    const getAllByDate = await this.appointmentRepository.findByDate(date, doctorId)

    if(!getAllByDate){
      throw new SearchError()
    }

    return getAllByDate
  }
}