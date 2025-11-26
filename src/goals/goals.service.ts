import { Injectable } from '@nestjs/common';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Goal } from './entities/goal.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class GoalsService {
  constructor(
    @InjectRepository(Goal)
    private goalsRepository: Repository<Goal>
  ) {}

  async create(createGoalDto: CreateGoalDto): Promise<Goal> {
    const goal = this.goalsRepository.create(createGoalDto);
    return await this.goalsRepository.save(goal);
  }

  async findAll(): Promise<Goal[]> {
    return await this.goalsRepository.find();
  }

  async findOne(id: string): Promise<Goal | null> {
    return await this.goalsRepository.findOneBy({ id });
  }

  async update(id: string, updateGoalDto: UpdateGoalDto): Promise<UpdateResult> {
    return await this.goalsRepository.update(id, updateGoalDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.goalsRepository.delete(id);
  }
}
