import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { LoginController } from "./controllers/LoginController";
import { CreateUserController } from "./controllers/UserController";

export async function appRoutes(app: FastifyInstance){
  app.post("/auth/login", LoginController)
  app.post("/register", CreateUserController)
  //{ preHandler: checkToken }
  function checkToken(request: FastifyRequest, reply: FastifyReply){
    const authHeader = request.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token){
      return  reply.status(401).send({ msg: 'Acesso negado' })
      
    }
  }
}