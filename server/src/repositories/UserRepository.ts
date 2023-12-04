import { type Prisma, type User } from '@prisma/client'

export interface UserRepository {
  create: (data: Prisma.UserCreateInput) => Promise<User>
  findByUsername: (username: string) => Promise<User | null>
  findById: (id: string) => Promise<User | null>
}
