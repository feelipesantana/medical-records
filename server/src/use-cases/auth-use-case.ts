import { type User } from '@prisma/client'
import { type UserRepository } from '../repositories/UserRepository'
import { compare } from 'bcrypt'
import { RequiredParametersErros } from '../errors/RequiredParametersErros'

interface AuthUseCaseRequest {
  username: string
  password: string
}

type AuthUSeCaseResponse = User
export class AuthUseCase {
  constructor (private readonly userRepository: UserRepository) {}
  async execute ({
    username,
    password
  }: AuthUseCaseRequest): Promise<AuthUSeCaseResponse> {
    const findUser = await this.userRepository.findByUsername(username)

    if (!findUser) {
      throw new RequiredParametersErros(
        'Usuário não encontrado TEste, verifique usuário ou senha se está correto'
      )
    }

    // Check Both Pass
    const isPasswordValid = await compare(password, findUser.password)

    if (!isPasswordValid) {
      throw new RequiredParametersErros(
        'Usuário não encontrado, verifique usuário ou senha se está correto'
      )
    }

    return findUser
  }
}
