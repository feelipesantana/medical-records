import { beforeEach, describe, expect, it, test } from 'vitest'
import { InMemoryAppointmentRepository } from '../repositories/in-memory/in-memory-appointment-repository'
import { CreateAppointmentUseCase } from './create-appointment'
import { getFutureDate } from '../utils/getFutureDate'

let inMemoryAppointmentRepository = new InMemoryAppointmentRepository()
let sut = new CreateAppointmentUseCase(inMemoryAppointmentRepository)
describe('Create Appointment', () => {
  beforeEach(() => {
    inMemoryAppointmentRepository = new InMemoryAppointmentRepository()
    sut = new CreateAppointmentUseCase(inMemoryAppointmentRepository)
  })
  test('create an appointment', async () => {
    const startsAt = getFutureDate('2022-10-10')
    const endsAt = getFutureDate('2022-10-11')

    const createAppointment = await sut.execute({
      startsAt,
      endsAt,
      doctorId: 'johnDoe1234',
      patientId: '456',
      description: 'teste'
    })

    expect(createAppointment).toEqual(expect.objectContaining({ doctorId: 'johnDoe1234' }))
  })

  it('is not to be able to create an appointment to same doctorId thats contains startsAt same Date', async () => {
    const startsAt = getFutureDate('2022-10-10')
    const endsAt = getFutureDate('2022-10-15')
    const doctorId = 'johnDoe123'

    await sut.execute({
      startsAt,
      endsAt,
      doctorId,
      patientId: '456',
      description: 'teste'
    })

    await expect(sut.execute({
      startsAt: getFutureDate('2022-10-11'),
      endsAt: getFutureDate('2022-10-12'),
      doctorId,
      patientId: '456',
      description: 'teste'
    })).rejects.toBeInstanceOf(Error)
  })

  // it('is not to be able to create an appointment with times exists', async () => {
  //   await sut.execute({
  //     startTime: getFutureDate('2023-10-12'),
  //     endTime: getFutureDate('2023-10-12'),
  //     doctorId: '123',
  //     patientId: '456',
  //     description: 'teste'
  //   })

  //   await expect(async () => await sut.execute({
  //     startTime: getFutureDate('2023-10-12'),
  //     endTime: getFutureDate('2023-10-12'),
  //     doctorId: '123',
  //     patientId: '456',
  //     description: 'teste'
  //   })).rejects.toBeInstanceOf(CreateAppointmentOverlappingError)
  // })
})
