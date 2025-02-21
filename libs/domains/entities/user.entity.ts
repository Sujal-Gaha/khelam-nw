import { z } from "zod";

export enum UserRoleEnum {
  ADMIN = "ADMIN",
  USER = "USER",
}

export const UserRoleEnumSchema = z.nativeEnum(UserRoleEnum);

export type TUserRoleEnum = z.infer<typeof UserRoleEnumSchema>;

export const UserSchema = z.object({
  id: z.string().cuid(),
  email: z.string().email(),
  name: z.string(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(30, "Password must not exceed 30 characters"),
  is_email_verified: z.boolean().default(false),
  role: z.enum([UserRoleEnum.ADMIN, UserRoleEnum.USER]),
  created_at: z.date().default(new Date()),
  updated_at: z.date(),
});

export type User = z.infer<typeof UserSchema>;
