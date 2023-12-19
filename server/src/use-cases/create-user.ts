import { type AccessType, type User } from '@prisma/client'
import { type UserRepository } from '../repositories/UserRepository'
import bcrypt from 'bcrypt'
import { RequiredParametersErros } from '../errors/RequiredParametersErros'

interface AuthUseCaseRequest {
  name: string
  age: number
  document: string
  securityNumber: string
  username: string
  password: string
  email: string
  accessType: AccessType
}

type AuthUSeCaseResponse = User

export class CreateUserUseCase {
  constructor (private readonly userRepository: UserRepository) {}
  async execute (data: AuthUseCaseRequest): Promise<AuthUSeCaseResponse> {
    const verifyUserExist = await this.userRepository.findByEmail(data.email)

    // Verifying if User Exists
    if (verifyUserExist) {
      throw new RequiredParametersErros('User already exists', 409)
    }

    // Hash Password
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(data.password, salt)

    const createUser = await this.userRepository.create({
      name: data.name,
      age: data.age,
      email: data.email,
      document: data.document,
      securityNumber: data.securityNumber,
      accessType: data.accessType,
      username: data.username,
      password: passwordHash
    })

    if (!createUser) {
      throw new RequiredParametersErros('Erro na criação do usuário', 500)
    }

    return createUser
  }
}