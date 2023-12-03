import { FastifyInstance } from "fastify";
import { LoginController } from "./controllers/LoginController";
import { CreateUserController } from "./controllers/UserController";

export async function appRoutes(app: FastifyInstance){
  app.post("/auth/login", LoginController)
  app.post("/register", CreateUserController)
}