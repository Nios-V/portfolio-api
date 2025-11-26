import { Transform } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateProjectDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => value ?? true)
    active: boolean;

    @IsString()
    @IsNotEmpty()
    short_description: string;

    @IsString()
    @IsNotEmpty()
    complete_description: string;

    @IsString()
    @IsUrl()
    @IsNotEmpty()
    image_url: string;

    @IsString()
    @IsUrl()
    @IsNotEmpty()
    repository_url: string;
}
