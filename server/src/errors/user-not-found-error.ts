export class UserNotFound extends Error {
  constructor () {
    super('Usuário não encontrado, verifique!')
  }
}
