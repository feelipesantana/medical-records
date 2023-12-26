import { beforeEach, describe, expect, it, test } from 'vitest'
import { InMemoryAppointmentRepository } from '../repositories/in-memory/in-memory-appointment-repository'
import { CreateAppointmentUseCase } from './create-appointment'
import { getFutureDate } from '../utils/getFutureDate'
import { CreateError } from '../errors/create-error'
import { CreateAppointmentOverlappingError } from '../errors/create-appointment-overlapping-error'

let inMemoryAppointmentRepository = new InMemoryAppointmentRepository()
let sut = new CreateAppointmentUseCase(inMemoryAppointmentRepository)
describe('Create Appointment', () => {
  beforeEach(() => {
    inMemoryAppointmentRepository = new InMemoryAppointmentRepository()
    sut = new CreateAppointmentUseCase(inMemoryAppointmentRepository)
  })
  test('create an appointment', async () => {
    const startsAt = getFutureDate('2022-08-02T09:00:00.000Z')
    const endsAt = getFutureDate('2022-08-02T09:30:00.000Z')

    const createAppointment = await sut.execute({
      startsAt,
      endsAt,
      doctorId: 'johnDoe1234',
      patientId: '456',
      description: 'teste'
    })

    expect(createAppointment).toEqual(expect.objectContaining({ doctorId: 'johnDoe1234' }))
  })

  it('is not to be able create a overlapping times(Times Equals)', async () => {
    const startsAt = getFutureDate('2023-12-01T09:00:00.000Z')
    const endsAt = getFutureDate('2023-12-01T09:30:00.000Z')
    const doctorId = 'johnDoe123'

   await sut.execute({
      startsAt,
      endsAt,
      doctorId,
      patientId: '456',
      description: 'teste'
    })

      
    await expect(sut.execute({
      startsAt: getFutureDate('2023-12-01T09:00:00.000Z'),
      endsAt: getFutureDate('2023-12-01T09:30:00.000Z'),
      doctorId,
      patientId: '456',
      description: 'teste'
    })).rejects.toBeInstanceOf(CreateAppointmentOverlappingError)
  })

  it('is not to be able create a overlapping times(endAt ended over the time that already exists)', async () => {
    const startsAt = getFutureDate('2023-05-02T11:00:00.000Z')
    const endsAt = getFutureDate('2023-05-02T11:30:00.000Z')
    const doctorId = 'johnDoe123'

   await sut.execute({
      startsAt,
      endsAt,
      doctorId,
      patientId: '456',
      description: 'teste'
    })
  
    await expect(sut.execute({
      startsAt: getFutureDate('2023-05-02T10:40.000Z'),
      endsAt: getFutureDate('2023-05-02T11:20:00.000Z'),
      doctorId,
      patientId: '456',
      description: 'teste'
    })).rejects.toBeInstanceOf(CreateAppointmentOverlappingError)
  })

  it('is not to be able create a overlapping times(startsAt stated over the time that already exists)', async () => {
    const startsAt = getFutureDate('2023-05-02T11:00:00.000Z')
    const endsAt = getFutureDate('2023-05-02T11:30:00.000Z')
    const doctorId = 'johnDoe123'

   await sut.execute({
      startsAt,
      endsAt,
      doctorId,
      patientId: '456',
      description: 'teste'
    })
  
    await expect(sut.execute({
      startsAt: getFutureDate('2023-05-02T11:20:00.000Z'),
      endsAt: getFutureDate('2023-05-02T12:30:00.000Z'),
      doctorId,
      patientId: '456',
      description: 'teste'
    })).rejects.toBeInstanceOf(CreateAppointmentOverlappingError)
  })

  it('is not to be able create a overlapping times(startsAt and endTime between the the times that already exists)', async () => {
    const startsAt = getFutureDate('2023-05-02T11:00:00.000Z')
    const endsAt = getFutureDate('2023-05-02T11:30:00.000Z')
    const doctorId = 'johnDoe123'

   await sut.execute({
      startsAt,
      endsAt,
      doctorId,
      patientId: '456',
      description: 'teste'
    })
  
    await expect(sut.execute({
      startsAt: getFutureDate('2023-05-02T11:10:00.000Z'),
      endsAt: getFutureDate('2023-05-02T11:20:00.000Z'),
      doctorId,
      patientId: '456',
      description: 'teste'
    })).rejects.toBeInstanceOf(CreateAppointmentOverlappingError)
  })

  it('is to be able to create a shortly thereafter the time that existed)', async () => {
    const startsAt = getFutureDate('2023-05-02T11:00:00.000Z')
    const endsAt = getFutureDate('2023-05-02T11:30:00.000Z')
    const doctorId = 'johnDoe123'

   await sut.execute({
      startsAt,
      endsAt,
      doctorId,
      patientId: '456',
      description: 'teste'
    })
  
    const createSecondAppointment = await sut.execute({
      startsAt: getFutureDate('2023-05-02T11:30:00.000Z'),
      endsAt: getFutureDate('2023-05-02T12:00:00.000Z'),
      doctorId,
      patientId: '456',
      description: 'teste'
    })

    expect(createSecondAppointment).toEqual(expect.objectContaining({ endsAt: getFutureDate('2023-05-02T12:00:00.000Z') }))
  })

})
