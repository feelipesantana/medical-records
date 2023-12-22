import { PrismaUserRepository } from '../../repositories/prisma/PrismaUserRepository'
import { ValidateToken } from '../validate-token'

export function makeValidadeTokenUseCase () {
  const userRepository = new PrismaUserRepository()
  const validateUserToken = new ValidateToken(userRepository)

  return validateUserToken
}
