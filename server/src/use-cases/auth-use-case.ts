import { User } from "@prisma/client";
import { UserRepository } from "../repositories/UserRepository";
import {compare} from 'bcrypt'

interface AuthUseCaseRequest{
  username:string;
  password:string;
}

type AuthUSeCaseResponse =  User
export class AuthUseCase{
  constructor(private userRepository: UserRepository){}
  async execute({username,password}: AuthUseCaseRequest): Promise<AuthUSeCaseResponse>{
    
    const user = await this.userRepository.findByUsername(username)
    
    if(!user){
      throw new Error('Usuário não encontrado, verifique usuário ou senha se está correto')
    }

    const checkPassword = await compare(user.password, password)
    
    if(!checkPassword){
      throw new Error('Usuário não encontrado, verifique usuário ou senha se está correto')
    }

    return user
  }
}