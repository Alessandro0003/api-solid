import { UsersRepository } from '@/repositories/users';
import { hash } from 'bcryptjs';
import { UserAlreadyExistsError } from '../errors/user-already-exists';

interface RegisterUseCaseRequest {
	name: string;
	email: string;
	password: string;
}

export class RegisterUseCases {

	constructor(private userRepository: UsersRepository) {}

	async execute({ 
		name,
		email,
		password,
	}: RegisterUseCaseRequest) {

		const userWithSameEmail = await this.userRepository.findByEmail(email);

		if (userWithSameEmail) {
			throw new UserAlreadyExistsError();
		}
		
		const passwordHash = await hash(password, 6);

		const user = await this.userRepository.create({
			name,
			email,
			password: passwordHash,
		});

		return user;
	};
}
