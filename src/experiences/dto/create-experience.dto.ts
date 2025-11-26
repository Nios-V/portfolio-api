import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { ExperienceType } from "../enum/experience-type.enum";

export class CreateExperienceDto {
    @IsEnum(ExperienceType)
    @IsNotEmpty()
    type: ExperienceType;

    @IsBoolean()
    @IsNotEmpty()
    active: boolean;

    @IsString()
    @IsNotEmpty()
    position: string;

    @IsDateString()
    @IsNotEmpty()
    start_date: Date;

    @IsOptional()
    @IsNotEmpty()
    @IsDateString()
    end_date: Date | null;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    order: number;
    
}
