import { UserSchema } from "@/schemas/user";
import * as Service from "@/services/user";
import type { FastifyReply, FastifyRequest } from "fastify";

export const register = async (
	request: FastifyRequest,
	reply: FastifyReply,
) => {
  const { name, email, password } = UserSchema.parse(request.body);

  await Service.register({
    name,
    email,
    password
  })

  return reply.status(201).send()
};
