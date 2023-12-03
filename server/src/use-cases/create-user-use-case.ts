import { AccessType, User } from "@prisma/client";
import { UserRepository } from "../repositories/UserRepository";
import {compare} from 'bcrypt'


interface AuthUseCaseRequest{
  name: string;
  age: number;
  document:string;
  securityNumber: string;
  username: string;
  password: string;
  email:string;
  accessType: AccessType;
}

type AuthUSeCaseResponse =  User
export class CreateUserUseCase{
  constructor(private userRepository: UserRepository){}
  async execute(data: AuthUseCaseRequest): Promise<AuthUSeCaseResponse>{
    
    const createUser = await this.userRepository.create({
      name: data.name,
      age: data.age, 
      email: data.email,
      document: data.document,
      securityNumber: data.securityNumber,
      accessType: data.accessType,
      username: data.username,
      password: data.password,

    })
    
    if(!createUser){
      throw new Error('Erro na criação do usuário')
    }

    return createUser
  }
}