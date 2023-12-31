import { type Prisma } from '@prisma/client'
import { prisma } from '../../lib/prisma'
import { type UserRepository } from '../UserRepository'

export class PrismaUserRepository implements UserRepository {
  async create (data: Prisma.UserCreateInput) {
    const createUser = await prisma.user.create({
      data: {
        name: data.name,
        age: data.age,
        email: data.email,
        document: data.document,
        securityNumber: data.securityNumber,
        accessType: data.accessType,
        username: data.username,
        password: data.password
      }
    })

    return createUser
  }

  async findById (id: string) {
    const findUser = await prisma.user.findFirst({
      where: {
        id
      }
    })
    return findUser
  }

  async findByEmail (email: string) {
    const findEmail = await prisma.user.findUnique({
      where: {
        email
      }
    })

    return findEmail
  }
}
