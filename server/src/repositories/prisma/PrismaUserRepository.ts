import { User } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { UserRepository } from "../UserRepository";

export class PrismaUserRepository implements UserRepository{

  async findByUsername(username: string):Promise<User | null>{
    const findUsername = await prisma.user.findUnique({
      where:{
        username
      }
    }) 

    return findUsername
  }
}