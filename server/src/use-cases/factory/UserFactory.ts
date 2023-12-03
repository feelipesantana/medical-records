import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { CreateUserUseCase } from "../create-user-use-case";

export function CreateUserFactory(){
  const prismaUserRepository = new PrismaUserRepository();
  const createUserUseCase = new CreateUserUseCase(prismaUserRepository)
  
  return createUserUseCase
}