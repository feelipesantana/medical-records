import { type Prisma, type User } from '@prisma/client'
import crypto from 'crypto'
export class InMemoryUserRepository {
  private readonly users: User[] = []

  async create (data: Prisma.UserCreateInput): Promise<User> {
    const user = {
      id: crypto.randomUUID(),
      name: data.name,
      age: data.age,
      email: data.email,
      document: data.document,
      securityNumber: data.securityNumber,
      accessType: data.accessType,
      username: data.username,
      password: data.password
    }

    this.users.push(user)

    return user
  }

  async findByEmail (email: string): Promise<User | null> {
    const findUser = this.users.find(user => user.email === email)

    if (!findUser) {
      return null
    }
    return findUser
  }

  async findById (id: string): Promise<User | null> {
    const findUser = this.users.find(user => user.id === id)

    if (!findUser) {
      return null
    }
    return findUser
  }
}
