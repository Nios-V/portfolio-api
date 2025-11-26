import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from './entities/skill.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill)
    private skillsRepository: Repository<Skill>
  ) {}
  async create(createSkillDto: CreateSkillDto): Promise<Skill> {
    const skill = this.skillsRepository.create(createSkillDto);
    return await this.skillsRepository.save(skill);
  }

  async findAll(): Promise<Skill[]> {
    return await this.skillsRepository.find();
  }

  async findOne(id: string): Promise<Skill | null> {
    return await this.skillsRepository.findOneBy({ id });
  }

  async update(id: string, updateSkillDto: UpdateSkillDto): Promise<UpdateResult> {
    return await this.skillsRepository.update(id, updateSkillDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.skillsRepository.delete(id);
  }
}
