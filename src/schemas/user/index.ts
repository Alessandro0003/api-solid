import { z } from 'zod';

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6)
})

export type UserInput = z.input<typeof UserSchema>;
export type UserOutput = z.output<typeof UserSchema>;