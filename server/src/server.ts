import fastify from 'fastify'
import { appRoutes } from './http/routes'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
  origin: 'http://localhost:3000', // Permitir apenas as solicitações deste URL
  methods: ['GET', 'PUT', 'POST', 'DELETE'] // Métodos permitidos
})

app.register(appRoutes)

app.listen({
  host: '0.0.0.0',
  port: 3333
}).then(() => {
  console.log('🚀 Server is Running on Port: 3333')
})
