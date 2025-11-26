import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Institution } from './entities/institution.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';

@Injectable()
export class InstitutionsService {
    constructor(
        @InjectRepository(Institution)
        private institutionsRepository: Repository<Institution>
    ) {}

    async create(createInstitutionDto: CreateInstitutionDto): Promise<Institution> {
        const institution = this.institutionsRepository.create(createInstitutionDto);
        return await this.institutionsRepository.save(institution);
    }

    async findAll(): Promise<Institution[]> {
        return await this.institutionsRepository.find();
    }

    async findOne(id: string): Promise<Institution | null> {
        return await this.institutionsRepository.findOneBy({ id });
    }

    async update(id: string, updateInstitutionDto: UpdateInstitutionDto): Promise<UpdateResult> {
        return await this.institutionsRepository.update(id, updateInstitutionDto);
    }
}
