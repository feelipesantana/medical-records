import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryAppointmentRepository } from '../repositories/in-memory/in-memory-appointment-repository'
import { GetAppointmentsUseCase } from './get-appointments'
import { randomUUID } from 'crypto'

let inMemoryAppointmentRepository: InMemoryAppointmentRepository
let sut: GetAppointmentsUseCase

describe('Get Appointments', () => {
  beforeEach(() => {
    inMemoryAppointmentRepository = new InMemoryAppointmentRepository()
    sut = new GetAppointmentsUseCase(inMemoryAppointmentRepository)
  })
  it('must be able to get all appointments exists', async () => {
    await inMemoryAppointmentRepository.create({
      startTime: new Date(),
      endTime: new Date(),
      description: 'Teste1',
      doctorId: randomUUID(),
      patientId: randomUUID()
    })

    await inMemoryAppointmentRepository.create({
      startTime: new Date(),
      endTime: new Date(),
      description: 'teste',
      doctorId: randomUUID(),
      patientId: randomUUID()
    })

    const searchAppointments = await sut.execute()
    expect(searchAppointments).toHaveLength(2)
  })
})
