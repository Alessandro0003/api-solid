import { prisma } from "@/lib/prisma";
import { UsersRepository } from '@/repositories/users';
import { hash } from 'bcryptjs';

interface RegisterUseCaseRequest {
	name: string;
	email: string;
	password: string;
}

export const registerUseCase = async ({ 
	name,
	email,
	password,
}: RegisterUseCaseRequest) => {

	const passwordHash = await hash(password, 6);

	const userWithSameEmail = await prisma.user.findUnique({
		where: {
			email,
		}
	});

	if (userWithSameEmail) {
		throw new Error('User already exists with this email');
	}

	const userRepository = new UsersRepository();
	
	const user = await userRepository.create({
		name,
		email,
		passwordHash,
	});

	return user;
};
