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
      startsAt: getFutureDate('2022-08-11'),
      endsAt: getFutureDate('2022-08-12'),
      description: 'teste',
      doctorId: 'doutor1',
      patientId: randomUUID()
    })

    await inMemoryAppointmentRepository.create({
      id: 'teste1',
      startsAt: getFutureDate('2022-10-11'),
      endsAt: getFutureDate('2022-10-12'),
      description: 'teste',
      doctorId: 'doutor3',
      patientId: randomUUID()
    })

    await inMemoryAppointmentRepository.create({
      startsAt: getFutureDate('2022-09-11'),
      endsAt: getFutureDate('2022-09-12'),
      description: 'teste',
      doctorId: 'doutor3',
      patientId: randomUUID()
    })

    const searchAppointments = await sut.execute({
      doctorId: 'doutor3'
    })

    expect(searchAppointments).toHaveLength(2)
    expect(searchAppointments).toHaveLength(2)
  })

  it('must to return 0 when not found doctorId', async () => {
    const appointments = await sut.execute({
      doctorId: 'non-existing-id'
    })

    const qtdAppointments = appointments.length

    expect(qtdAppointments).toBe(0)
  })
})
