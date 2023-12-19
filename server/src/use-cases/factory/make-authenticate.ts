import { PrismaUserRepository } from '../../repositories/prisma/PrismaUserRepository'
import { AuthenticateUseCase } from '../authenticate'

export function makeAuthenticate (): AuthenticateUseCase {
  const prismaUserRepository = new PrismaUserRepository()
  const authUseCase = new AuthenticateUseCase(prismaUserRepository)
  return authUseCase
}
