import { expect, test } from 'vitest'
import { InMemoryAppointmentRepository } from '../repositories/in-memory/in-memory-appointment-repository'
import { CreateAppointmentUseCase } from './create-appointment'

test('create an appointment', () => {
  const inMemoryAppointmentRepository = new InMemoryAppointmentRepository()
  const createNewAppointment = new CreateAppointmentUseCase(inMemoryAppointmentRepository)
  expect(createNewAppointment).toBeTruthy()
})
