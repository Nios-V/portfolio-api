import { Injectable } from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Experience } from './entities/experience.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ExperiencesService {
  constructor(
    @InjectRepository(Experience)
    private experiencesRepository: Repository<Experience>
  ) {}

  async create(createExperienceDto: CreateExperienceDto): Promise<Experience> {
    const experience = this.experiencesRepository.create(createExperienceDto);
    return await this.experiencesRepository.save(experience);
  }

  async findAll(): Promise<Experience[]> {
    return await this.experiencesRepository.find();
  }

  async findOne(id: string): Promise<Experience | null> {
    return await this.experiencesRepository.findOneBy({ id });
  }

  async update(id: string, updateExperienceDto: UpdateExperienceDto): Promise<UpdateResult> {
    return await this.experiencesRepository.update(id, updateExperienceDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.experiencesRepository.delete(id);
  }
}
