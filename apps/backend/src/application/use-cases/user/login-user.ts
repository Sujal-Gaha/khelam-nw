import { TLoginUserInput, TLoginUserOutput } from "@libs/domains";
import { AbstractUserRepository } from "../../repository/user.repository";

export class LoginUserUseCase {
  constructor(private userRepository: AbstractUserRepository) {}

  async execute(input: TLoginUserInput): Promise<TLoginUserOutput> {
    return this.userRepository.loginUser({
      email: input.email,
      password: input.password,
    });
  }
}
