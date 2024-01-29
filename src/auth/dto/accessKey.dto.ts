import { IsEmail, IsString } from 'class-validator';

export class AccessKeyDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  password: string;
}
