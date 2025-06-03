import { register } from '@/http/controllers/user';
import { FastifyInstance } from 'fastify';

export const userRoutes = async (app: FastifyInstance) => {
  app.post('/users', register)
}