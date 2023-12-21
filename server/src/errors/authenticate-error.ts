export class AuthenticateError extends Error {
  constructor () {
    super('Não foi possível se autenticar, Verifique!')
  }
}
