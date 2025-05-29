import { prisma } from "@/lib/prisma";
import type { Register } from "./types";

export const register = async (
	args: Register.Request,
) => {
	const { name, email, password } = args;

	return await prisma.user.create({
		data: {
			name,
			email,
			password_hash: password,
		},
	});
};
