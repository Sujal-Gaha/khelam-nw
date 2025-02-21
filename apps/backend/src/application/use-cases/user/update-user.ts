import { TUpdateUserInput, TUpdateUserOutput } from "@libs/domains";
import { AbstractUserRepository } from "../../repository/user.repository";

export class UpdateUserUseCase {
  constructor(private userRepository: AbstractUserRepository) {}

  async execute(input: TUpdateUserInput): Promise<TUpdateUserOutput> {
    return this.userRepository.updateUser({
      id: input.id,
      name: input.name,
      email: input.email,
      password: input.password,
    });
  }
}
