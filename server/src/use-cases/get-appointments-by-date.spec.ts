import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryAppointmentRepository } from "../repositories/in-memory/in-memory-appointment-repository";
import { GetAppointmentsByDate } from "./get-appointments-by-date";
import { getFutureDate } from "../utils/getFutureDate";
import {randomUUID} from 'crypto'
let inMemoryAppointmentRepository: InMemoryAppointmentRepository
let getAppointmentsByDate: GetAppointmentsByDate

describe(() =>{
  beforeEach(() =>{
    inMemoryAppointmentRepository = new InMemoryAppointmentRepository()
    getAppointmentsByDate = new GetAppointmentsByDate(inMemoryAppointmentRepository)
    
  })

  it("must to be able get appointments by date", async  () =>{
    
    await inMemoryAppointmentRepository.create({
      id: 'teste1',
      startsAt: getFutureDate('2022-08-11'),
      endsAt: getFutureDate('2022-08-12'),
      description: 'teste',
      doctorId: 'doutor3',
      patientId: randomUUID()
    })

    await inMemoryAppointmentRepository.create({
      id: 'teste1',
      startsAt: getFutureDate('2022-08-11'),
      endsAt: getFutureDate('2022-08-11'),
      description: 'teste',
      doctorId: 'doutor3',
      patientId: randomUUID()
    })


    // const getAppointments = getAppointmentsByDate.execute({
    //   date: getFutureDate('2022-08-11'),
    //   doctorId: 'doutor3'
    // })
    // expect(getAppointments).toBeTruthy
  })
})