import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateInstitutionDto {
    @IsOptional()
    @IsString()
    @Length(1, 255)
    name?: string;
}
