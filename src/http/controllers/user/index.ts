import { UserSchema } from "@/schemas/user";
import { registerUseCase } from "@/use-cases/user";
import type { FastifyReply, FastifyRequest } from "fastify";

export const register = async (
	request: FastifyRequest,
	reply: FastifyReply,
) => {
  const { name, email, password } = UserSchema.parse(request.body);

  try {
    await registerUseCase({
      name,
      email,
      password
    })
  } catch (error) {
    return reply.status(409).send()
  }
  
  return reply.status(201).send()
};
