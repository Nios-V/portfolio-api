import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository, UpdateResult } from 'typeorm';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
    constructor(
        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>
    ) {}

    async findOne(id: string): Promise<Profile | null> {
        return await this.profileRepository.findOneBy({ id });
    }

    async update(id: string, updateProfileDto: UpdateProfileDto): Promise<UpdateResult> {
        return await this.profileRepository.update(id, updateProfileDto);
    }
}
