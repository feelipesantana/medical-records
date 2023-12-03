import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { UserRepository } from "../UserRepository";

export class PrismaUserRepository implements UserRepository{

  async create(data: Prisma.UserCreateInput) {
    
    const createdUser = await prisma.user.create({
      data:{
        name: data.name,
        age: data.age, 
        email: data.email,
        document: data.document,
        securityNumber: data.securityNumber,
        accessType: data.accessType,
        username: data.username,
        password: data.password,
      }
    })

    return createdUser
  }
  async findByUsername(username: string){
    const findUsername = await prisma.user.findUnique({
      where:{
        username
      }
    }) 

    return findUsername
  }
}