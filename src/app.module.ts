import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { SkillsModule } from './skills/skills.module';
import { ProjectsModule } from './projects/projects.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { GoalsModule } from './goals/goals.module';

@Module({
  imports: [ProfilesModule, SkillsModule, ProjectsModule, ExperiencesModule, GoalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
