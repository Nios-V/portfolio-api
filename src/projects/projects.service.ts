import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const project = this.projectRepository.create(createProjectDto);
    return await this.projectRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async findOne(id: string): Promise<Project | null> {
    return await this.projectRepository.findOneBy({ id });
  }

  async update(id: string, updateProjectDto: UpdateProjectDto): Promise<UpdateResult> {
    return await this.projectRepository.update(id, updateProjectDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.projectRepository.delete(id);
  }
}
