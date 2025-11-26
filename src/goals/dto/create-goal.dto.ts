import { IsBoolean, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateGoalDto {
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsBoolean()
    @IsNotEmpty()
    active: boolean;

    @IsNumber()
    @Min(0)
    @IsNotEmpty()
    order: number;
}
