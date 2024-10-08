import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 6,
    minUppercase: 1,
    minNumbers: 0,
    //parâmetros não setados vem por default cm valor 1
  })
  password: string;

  @IsOptional()
  @IsDateString()
  birthAt: string;
}
