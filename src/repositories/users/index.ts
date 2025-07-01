import { UserInput, UserOutput } from "@/schemas/user"

export interface UsersRepository {
  findByEmail(args: UserInput['email']): Promise<UserOutput | null>
  create(args: UserInput): Promise<UserOutput>
}