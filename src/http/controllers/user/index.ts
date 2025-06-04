import { UsersRepository } from "@/repositories/users";
import { UserSchema } from "@/schemas/user";
import { RegisterUseCases } from "@/use-cases/user";
import type { FastifyReply, FastifyRequest } from "fastify";

export const register = async (
	request: FastifyRequest,
	reply: FastifyReply,
) => {
  const { name, email, password } = UserSchema.parse(request.body);

  try {
    const usersRepository = new UsersRepository();
    const registerUseCase = new RegisterUseCases(usersRepository);

    await registerUseCase.execute({
      name,
      email,
      password
    })
  } catch (error) {
    return reply.status(409).send()
  }
  
  return reply.status(201).send()
};
