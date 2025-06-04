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
	const userRepository = new UsersRepository();
	
	const passwordHash = await hash(password, 6);

	const  userWithSameEmail = await userRepository.findByEmail({ email });

	if (userWithSameEmail) {
		throw new Error('User already exists with this email');
	}

	const user = await userRepository.create({
		name,
		email,
		passwordHash,
	});

	return user;
};
