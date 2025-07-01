import { PrismaUsersRepository } from "@/repositories/prisma/users";
import { UserSchema } from "@/schemas/user";
import { RegisterUseCases } from "@/use-cases/user";
import type { FastifyReply, FastifyRequest } from "fastify";

export const register = async (
	request: FastifyRequest,
	reply: FastifyReply,
) => {
  const { name, email, password } = UserSchema.parse(request.body);

  try {
    const prismaUsersRepository = new PrismaUsersRepository();
    const registerUseCase = new RegisterUseCases(prismaUsersRepository);

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
