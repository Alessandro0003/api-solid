import { prisma } from "@/lib/prisma";
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
	})

	if (userWithSameEmail) {
		throw new Error('User already exists with this email');
	}

	return await prisma.user.create({
		data: {
			name,
			email,
			password_hash: passwordHash,
		},
	});
};
