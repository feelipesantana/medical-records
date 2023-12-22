import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserNotFound } from '../errors/user-not-found-error'
import { type UserRepository } from '../repositories/UserRepository'
import { env } from '../env'

interface AuthUseCaseRequest {
  email: string
  password: string
}

interface AuthUseCaseResponse {
  token: string
  id: string
  name: string
  accessType: string
}

type AuthUSeCaseResponse = AuthUseCaseResponse
export class AuthenticateUseCase {
  constructor (private readonly userRepository: UserRepository) {}
  async execute ({
    email,
    password
  }: AuthUseCaseRequest): Promise<AuthUSeCaseResponse> {
    // check Email exists
    const findUser = await this.userRepository.findByEmail(email)

    if (!findUser) {
      throw new UserNotFound()
    }

    // Check Both Pass
    console.log(password, findUser.password)
    const isPasswordValid = await compare(password, findUser.password)

    console.log(isPasswordValid)
    if (!isPasswordValid) {
      throw new UserNotFound()
    }

    // Generate Token JWT

    const token = jwt.sign({ id: findUser.id, email: findUser.email }, env.TOKEN_JWT, { expiresIn: '1d' })

    return { token, id: findUser.id, name: findUser.name, accessType: findUser.accessType }
  }
}
