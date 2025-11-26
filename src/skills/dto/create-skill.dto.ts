import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";
import { ExperienceLevel } from "../enum/experience-level.enum";
import { Transform } from "class-transformer";

export class CreateSkillDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsBoolean()
    @IsOptional()
    active: boolean;

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    icon_url: string;

    @IsString()
    @IsNotEmpty()
    @Transform(({ value }) => value ?? ExperienceLevel.BASIC)
    @IsEnum(ExperienceLevel)
    experience_level: ExperienceLevel;

    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => value ?? false)
    is_core: boolean;
}
