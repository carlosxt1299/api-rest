import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UpdateClienteDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  telefono?: string;
}