import { Prisma, User } from "@prisma/client"

export interface UserRepository{
  findByUsername(username: string):Promise<User | null>
}