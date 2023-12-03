import { FastifyInstance } from "fastify";
import { LoginController } from "./LoginController";

export async function appRoutes(app: FastifyInstance){
  app.post("/login", LoginController)
}