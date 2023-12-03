import { User } from "@prisma/client";
import { UserRepository } from "../repositories/UserRepository";

interface AuthUseCaseRequest{
  username:string;
  password:string;
}

type AuthUSeCaseResponse =  User
export class AuthUseCase{
  constructor(private userRepository: UserRepository){}
  async execute({username}: AuthUseCaseRequest): Promise<AuthUSeCaseResponse>{
    
    const user = await this.userRepository.findByUsername(username)
    
    if(!user){
      throw new Error('Usuário não encontrado')
    }
    
    return user
  }
}