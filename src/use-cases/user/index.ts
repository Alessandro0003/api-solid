import { hash } from 'bcryptjs';

interface RegisterUseCaseRequest {
	name: string;
	email: string;
	password: string;
}

export class RegisterUseCases {

	constructor(private userRepository: any) {}

	async execute({ 
		name,
		email,
		password,
	}: RegisterUseCaseRequest) {
		
		const passwordHash = await hash(password, 6);

		const user = await this.userRepository.create({
			name,
			email,
			passwordHash,
		});

		return user;
	};
}
