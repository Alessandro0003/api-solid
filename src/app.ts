import fastify from 'fastify'
import { register } from './http/controllers/user'

export const app = fastify()

app.post('/users', register)