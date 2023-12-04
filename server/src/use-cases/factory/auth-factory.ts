import { PrismaUserRepository } from '../../repositories/prisma/PrismaUserRepository'
import { AuthUseCase } from '../auth-use-case'

export function AuthFactory (): AuthUseCase {
  const prismaUserRepository = new PrismaUserRepository()
  const authUseCase = new AuthUseCase(prismaUserRepository)
  return authUseCase
}
