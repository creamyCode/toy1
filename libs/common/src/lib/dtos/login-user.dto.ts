import { IsString, MinLength, MaxLength } from 'class-validator';

export class LoginUserDto {
  @IsString()
  id: string;

  @IsString()
  @MinLength(6)
  @MaxLength(16)
  password: string;
}
