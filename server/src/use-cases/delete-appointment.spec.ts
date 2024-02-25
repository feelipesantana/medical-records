import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryAppointmentRepository } from "../repositories/in-memory/in-memory-appointment-repository";
import { UseCaseDeleteAppointment } from "./delete-appointment";
import { getFutureDate } from "../utils/getFutureDate";
import {randomUUID} from 'crypto'

 
let inMemoryAppointmentRepository: InMemoryAppointmentRepository
let sut: UseCaseDeleteAppointment
describe("delete appointment", () =>{
    beforeEach(() =>{
        inMemoryAppointmentRepository = new InMemoryAppointmentRepository
        sut = new UseCaseDeleteAppointment(inMemoryAppointmentRepository)
    })

    it("must be able to delete an appointment", async () =>{
        await inMemoryAppointmentRepository.create({
            id: 'teste1',
            startsAt: getFutureDate('2022-08-02T09:00:00.000Z'),
            endsAt: getFutureDate('2022-08-02T09:30:00.000Z'),
            description: 'teste',
            doctorId: 'doutor3',
            patientId: randomUUID()
        })
      
        await inMemoryAppointmentRepository.create({
            id: 'teste2',
            startsAt: getFutureDate('2023-08-02T10:00:00.000Z'),
            endsAt: getFutureDate('2023-08-02T10:30:00.000Z'),
            description: 'teste',
            doctorId: 'doutor3',
            patientId: randomUUID()
        })
        
        const getAll = await inMemoryAppointmentRepository.findAll("doutor3")

        if (getAll && getAll.length > 0) { // Verifique se o array retornado não é nulo e tem comprimento maior que zero
            const deleteAppointment = await sut.execute({ id: getAll[0].id });

            console.log(deleteAppointment)

            expect(deleteAppointment?.length).toBe(1); // Verifique se o comprimento do array retornado é 0
        } else {
            throw new Error("No appointments found for doctor 'doutor3'");
        }
        
    })

})