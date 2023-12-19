import { PrismaUserRepository } from '../../repositories/prisma/PrismaUserRepository'
import { CreateUserUseCase } from '../create-user'

export function makeCreateUser (): CreateUserUseCase {
  const prismaUserRepository = new PrismaUserRepository()
  const createUserUseCase = new CreateUserUseCase(prismaUserRepository)

  return createUserUseCase
}
