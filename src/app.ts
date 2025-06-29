import fastify from 'fastify'
import { userRoutes } from './http/routes/user'

export const app = fastify()

app.register(userRoutes)