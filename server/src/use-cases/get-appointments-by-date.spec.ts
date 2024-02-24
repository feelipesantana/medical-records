import { beforeEach, describe, expect, it, test } from "vitest";
import { InMemoryAppointmentRepository } from "../repositories/in-memory/in-memory-appointment-repository";
import { GetAppointmentsByDateUseCase } from "./get-appointments-by-date";
import { getFutureDate } from "../utils/getFutureDate";
import {randomUUID} from 'crypto'


let inMemoryAppointmentRepository: InMemoryAppointmentRepository
let getAppointmentsByDate: GetAppointmentsByDateUseCase


describe("Get Appointments by Date", () =>{
  beforeEach(() =>{
    inMemoryAppointmentRepository = new InMemoryAppointmentRepository()
    getAppointmentsByDate = new GetAppointmentsByDateUseCase(inMemoryAppointmentRepository)
    
  })

  test("must to be able get appointments by date", async  () =>{
    
    await inMemoryAppointmentRepository.create({
      id: 'teste1',
      startsAt: getFutureDate('2022-08-02T09:00:00.000Z'),
      endsAt: getFutureDate('2022-08-02T09:30:00.000Z'),
      description: 'teste',
      doctorId: 'doutor3',
      patientId: randomUUID()
    })

    await inMemoryAppointmentRepository.create({
      id: 'teste1',
      startsAt: getFutureDate('2023-08-02T10:00:00.000Z'),
      endsAt: getFutureDate('2023-08-02T10:30:00.000Z'),
      description: 'teste',
      doctorId: 'doutor3',
      patientId: randomUUID()
    })


    const getAppointments = getAppointmentsByDate.execute({
      date: getFutureDate('2023-08-02T10:00:00.000Z'),
      doctorId: 'doutor3'
    })
    expect(getAppointments).toBeTruthy()
    expect((await getAppointments).length).toBe(2)
  })
})