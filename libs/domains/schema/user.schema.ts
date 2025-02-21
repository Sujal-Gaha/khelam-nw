import { z } from "zod";
import { UserSchema } from "../entities/user.entity";

/**
 * Create User Schema
 */
export const CreateUserSchemaInput = UserSchema.pick({
  name: true,
  email: true,
  password: true,
});
export type TCreateUserInput = z.infer<typeof CreateUserSchemaInput>;

export const CreateUserSchemaOutput = UserSchema.pick({
  id: true,
  name: true,
  email: true,
  is_email_verified: true,
  role: true,
  created_at: true,
  updated_at: true,
});
export type TCreateUserOutput = z.infer<typeof CreateUserSchemaOutput>;

/**
 * Find User Schema
 */
export const FindUserByIdSchemaInput = UserSchema.pick({ id: true });
export type TFindUserByIdInput = z.infer<typeof FindUserByIdSchemaInput>;

export const FindUserByIdSchemaOutput = UserSchema.pick({
  id: true,
  name: true,
  email: true,
  is_email_verified: true,
  role: true,
  created_at: true,
  updated_at: true,
});
export type TFindUserByIdOutput = z.infer<typeof FindUserByIdSchemaOutput>;

/**
 * Find User By Email
 */
export const FindUserByEmailSchemaInput = UserSchema.pick({ email: true });
export type TFindUserByEmailInput = z.infer<typeof FindUserByEmailSchemaInput>;

export const FindUserByEmailSchemaOutput = UserSchema.pick({
  id: true,
  name: true,
  email: true,
  is_email_verified: true,
  role: true,
  created_at: true,
  updated_at: true,
});
export type TFindUserByEmailOutput = z.infer<typeof FindUserByEmailSchemaOutput> | null;

/**
 * Update User
 */
export const UpdateUserSchemaInput = UserSchema.pick({
  id: true,
  name: true,
  email: true,
  password: true,
});
export type TUpdateUserInput = z.infer<typeof UpdateUserSchemaInput>;

export const UpdateUserSchemaOutput = UserSchema.pick({
  id: true,
  name: true,
  email: true,
  is_email_verified: true,
  role: true,
  created_at: true,
  updated_at: true,
});
export type TUpdateUserOutput = z.infer<typeof UpdateUserSchemaOutput>;

/**
 * Delete User
 */
export const DeleteUserSchemaInput = UserSchema.pick({ id: true });
export type TDeleteUserInput = z.infer<typeof DeleteUserSchemaInput>;

export const DeleteUserSchemaOutput = UserSchema.pick({
  id: true,
  name: true,
  email: true,
  is_email_verified: true,
  role: true,
  created_at: true,
  updated_at: true,
});
export type TDeleteUserOutput = z.infer<typeof DeleteUserSchemaOutput>;

/**
 * Login User
 */
export const LoginUserSchemaInput = UserSchema.pick({
  email: true,
  password: true,
});
export type TLoginUserInput = z.infer<typeof LoginUserSchemaInput>;

export const LoginUserSchemaOutput = UserSchema.pick({
  id: true,
  name: true,
  email: true,
  is_email_verified: true,
  role: true,
  created_at: true,
  updated_at: true,
});
export type TLoginUserOutput = z.infer<typeof LoginUserSchemaOutput> | null;

/**
 * Logout User
 */
export const LogoutUserSchemaInput = UserSchema.pick({ id: true });
export type TLogoutUserInput = z.infer<typeof LogoutUserSchemaInput>;

export const LogoutUserSchemaOutput = UserSchema.pick({
  id: true,
  name: true,
});
export type TLogoutUserOutput = z.infer<typeof LogoutUserSchemaOutput> | null;
