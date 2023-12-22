import { type UserRepository } from '../repositories/UserRepository'
import jwt from 'jsonwebtoken'
import { env } from '../env'
import { type User } from '@prisma/client'
interface ValidateTokenRequest {
  token: string
}
interface JWTPayload {
  email: string
}
 type ValidateTokenResponse = Partial<User>

export class ValidateToken {
  constructor (private readonly userRepository: UserRepository) {}

  async execute ({ token }: ValidateTokenRequest): Promise<ValidateTokenResponse | null> {
    const { email } = jwt.verify(token, env.TOKEN_JWT) as JWTPayload
    console.log(email)
    if (!email) {
      throw new Error()
    }

    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw Error()
    }
    const { password: _, ...userLogin } = user

    return userLogin
  }
}
