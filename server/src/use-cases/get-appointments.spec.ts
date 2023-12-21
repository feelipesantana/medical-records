import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryAppointmentRepository } from '../repositories/in-memory/in-memory-appointment-repository'
import { GetAppointmentsUseCase } from './get-appointments'
import { randomUUID } from 'crypto'
import { getFutureDate } from '../utils/getFutureDate'

let inMemoryAppointmentRepository: InMemoryAppointmentRepository
let sut: GetAppointmentsUseCase

describe('Get Appointments', () => {
  beforeEach(() => {
    inMemoryAppointmentRepository = new InMemoryAppointmentRepository()
    sut = new GetAppointmentsUseCase(inMemoryAppointmentRepository)
  })
  it('must be able to get all appointments exists by each doctor selected', async () => {
    await inMemoryAppointmentRepository.create({
      id: 'teste1',
      startsAt: getFutureDate('2022-10-11'),
      endsAt: getFutureDate('2022-10-12'),
      description: 'teste',
      doctorId: 'doctor3',
      patientId: randomUUID()
    })

    await inMemoryAppointmentRepository.create({
      startsAt: getFutureDate('2022-09-11'),
      endsAt: getFutureDate('2022-09-12'),
      description: 'teste',
      doctorId: 'doctor3',
      patientId: randomUUID()
    })

    const searchAppointments = await sut.execute({
      doctorId: 'doctor3'
    })

    expect(searchAppointments).toHaveLength(2)
  })
})
