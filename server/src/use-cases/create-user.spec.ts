import { beforeEach, describe, expect, test } from 'vitest'
import { InMemoryUserRepository } from '../repositories/in-memory/in-memory-user-repository'
import { CreateUserUseCase } from './create-user'
import { UserAlreadyExists } from '../errors/user-already-exists-error'

let inMemoryUserRepository: InMemoryUserRepository
let sut: CreateUserUseCase

describe('Create User Use Case', () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    sut = new CreateUserUseCase(inMemoryUserRepository)
  })
  test('it should be able to create a user', async () => {
    const user = await sut.execute({
      name: 'John Doe',
      age: 27,
      email: 'johndoe@email.com',
      document: '11111111',
      securityNumber: '222222222',
      accessType: 'ADMIN',
      username: 'johndoe',
      password: '123'
    })

    expect(user.id).toEqual(expect.any(String))
  })

  test('it should not be able to create a user with email already existed', async () => {
    const email = 'johndoe@email.com'

    await sut.execute({
      name: 'John Doe',
      age: 27,
      email,
      document: '11111111',
      securityNumber: '222222222',
      accessType: 'ADMIN',
      username: 'johndoe',
      password: '1234566789'
    })

    await expect(async () => await sut.execute({
      name: 'John Teste',
      age: 28,
      email,
      document: '888888',
      securityNumber: '999999',
      accessType: 'ADMIN',
      username: 'johndoe2',
      password: '123456678910'
    })
    ).rejects.toBeInstanceOf(UserAlreadyExists)
  })
})
