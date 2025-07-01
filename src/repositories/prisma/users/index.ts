import { prisma } from "@/lib/prisma";
import { UsersRepository } from "@/repositories/users";
import { Create } from './types';

export class PrismaUsersRepository implements UsersRepository {
  
  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    return {
      name: user.name,
      email: user.email,
      password: user.password_hash,
    };
  }
 
  async create(args: Create.Args) {
    const { name, email, password } = args;

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password_hash: password,
      }
    });

    return {
      name: user.name,
      email: user.email,
      password: args.password,
    };
  }

  
}