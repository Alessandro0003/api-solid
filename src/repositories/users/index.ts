import { prisma } from "@/lib/prisma";
import { Create } from "./types";

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
}