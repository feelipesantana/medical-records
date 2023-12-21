import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryUserRepository } from '../repositories/in-memory/in-memory-user-repository'
import { AuthenticateUseCase } from './authenticate'
import bcrypt from 'bcrypt'
let inMemoryUserRepository: InMemoryUserRepository
let sut: AuthenticateUseCase

describe('Authenticate Use Case', () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    sut = new AuthenticateUseCase(inMemoryUserRepository)
  })

  it('must to be able user to authenticate', async () => {
    const email = 'johndoe123@gmail.com'
    const salt = await bcrypt.genSalt(12)

    const passwordHash = await bcrypt.hash('root1010', salt)

    await inMemoryUserRepository.create({
      name: 'John Doe',
      age: 27,
      email,
      document: '11111111',
      securityNumber: '222222222',
      accessType: 'ADMIN',
      username: 'johndoe12',
      password: passwordHash
    })

    const login = await sut.execute({
      email,
      password: 'root1010'
    })
    expect(login.token).toEqual(expect.any(String))
  })
})
