import {
  TCreateUserInput,
  TCreateUserOutput,
  TDeleteUserInput,
  TDeleteUserOutput,
  TFindUserByEmailInput,
  TFindUserByEmailOutput,
  TFindUserByIdInput,
  TFindUserByIdOutput,
  TLoginUserInput,
  TLoginUserOutput,
  TLogoutUserOutput,
  TUpdateUserInput,
  TUpdateUserOutput,
  UserRoleEnum,
} from "@libs/domains";
import { AbstractUserRepository } from "../../application/repository/user.repository";
import { db } from "@libs/backend-db";
import bcrypt from "bcrypt";

export class UserRepository implements AbstractUserRepository {
  private jwtSecret: string = process.env.JWT_SECRET || "your_jwt_secret";

  async createUser(input: TCreateUserInput): Promise<TCreateUserOutput> {
    const hashedPassword = await bcrypt.hash(input.password, 10);

    const user = await db.user.create({
      data: {
        name: input.name,
        email: input.email,
        password: hashedPassword,
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role as UserRoleEnum,
    };
  }

  async findUserById(input: TFindUserByIdInput): Promise<TFindUserByIdOutput> {
    const user = await db.user.findUnique({
      where: {
        id: input.id,
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role as UserRoleEnum,
    };
  }

  async findUserByEmail(input: TFindUserByEmailInput): Promise<TFindUserByEmailOutput> {
    const user = await db.user.findUnique({
      where: {
        email: input.email,
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role as UserRoleEnum,
    };
  }

  async updateUser(input: TUpdateUserInput): Promise<TUpdateUserOutput> {
    const updatedUser = await db.user.update({
      where: {
        id: input.id,
      },
      data: {
        name: input.name,
        email: input.email,
        password: input.password,
      },
    });

    return {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role as UserRoleEnum,
    };
  }

  async deleteUser(input: TDeleteUserInput): Promise<TDeleteUserOutput> {
    const deletedUser = await db.user.delete({
      where: {
        id: input.id,
      },
    });

    return {
      id: deletedUser.id,
      name: deletedUser.name,
      email: deletedUser.email,
      role: deletedUser.role as UserRoleEnum,
    };
  }

  async loginUser(input: TLoginUserInput): Promise<TLoginUserOutput> {
    const user = await db.user.findUnique({
      where: {
        email: input.email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(input.password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role as UserRoleEnum,
    };
  }

  async logoutUser(): Promise<TLogoutUserOutput> {
    return {
      id: "",
      name: "",
    };
  }
}
