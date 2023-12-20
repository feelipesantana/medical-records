import { type User } from '@prisma/client'
import { type UserRepository } from '../repositories/UserRepository'
import { compare } from 'bcrypt'
import { RequiredParametersErros } from '../errors/user-already-existed-error'

interface AuthUseCaseRequest {
  email: string
  password: string
}

type AuthUSeCaseResponse = User
export class AuthenticateUseCase {
  constructor (private readonly userRepository: UserRepository) {}
  async execute ({
    email,
    password
  }: AuthUseCaseRequest): Promise<AuthUSeCaseResponse> {
    const findUser = await this.userRepository.findByEmail(email)

    console.log('HELLo', findUser)
    if (!findUser) {
      throw new RequiredParametersErros(
        'Usuário não encontrado, verifique usuário ou senha se está correto'
      )
    }

    // Check Both Pass
    const isPasswordValid = await compare(password, findUser.password)

    console.log(isPasswordValid)
    if (!isPasswordValid) {
      throw new RequiredParametersErros(
        'Usuário não encontrado, verifique usuário ou senha se está correto'
      )
    }

    return findUser
  }
}
