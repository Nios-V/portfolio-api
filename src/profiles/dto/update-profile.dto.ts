import { IsOptional, IsString, IsUrl, IsArray, isEmail, IsEmail } from 'class-validator';

export class UpdateProfileDto {

    @IsOptional()
    @IsString()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    @IsUrl()
    avatar_url?: string;

    @IsOptional()
    @IsString()
    professional_headline?: string;

    @IsOptional()
    @IsString()
    resume_hero?: string;

    @IsOptional()
    @IsString()
    description?: string;

}