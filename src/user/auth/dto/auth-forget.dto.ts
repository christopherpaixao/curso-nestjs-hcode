import { IsEmail } from "class-validator";

export class AuthForgertDto {
  @IsEmail()
  email: string;
}
