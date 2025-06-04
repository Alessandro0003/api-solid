import { prisma } from "@/lib/prisma";
import { Create, FindByEmail } from "./types";

export class UsersRepository {
  async create(args: Create.Args) {
    const { name, email, passwordHash } = args;
    
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password_hash: passwordHash,
      },
    });

    return user;
  }

  async findByEmail(args: FindByEmail.Args) {
    const { email } = args;

    const findEmail = await prisma.user.findUnique({
      where: {
        email,
      }
	  });

    return findEmail;
  }
}