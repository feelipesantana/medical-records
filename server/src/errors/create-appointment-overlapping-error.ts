export class CreateAppointmentOverlappingError extends Error {
  constructor () {
    super('O horário já está ocupado!')
  }
}
