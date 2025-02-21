import { TCreateUserInput, TCreateUserOutput } from "@libs/domains";
import { AbstractUserRepository } from "../../repository/user.repository";

export class CreateUserUseCase {
  constructor(private userRepository: AbstractUserRepository) {}

  async execute(input: TCreateUserInput): Promise<TCreateUserOutput> {
    const userExists = await this.userRepository.findUserByEmail({
      email: input.email,
    });

    if (userExists) {
      throw new Error("User already exists");
    }

    return this.userRepository.createUser({
      name: input.name,
      email: input.email,
      password: input.password,
    });
  }
}
