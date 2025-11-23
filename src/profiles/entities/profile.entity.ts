import { Experience } from "src/experiences/entities/experience.entity";
import { Project } from "src/projects/entities/project.entity";
import { Skill } from "src/skills/entities/skill.entity";
import { Column, CreateDateColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Profile {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    firtName: string;

    @Column({ nullable: false })
    lastName: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    avatar_url: string;

    @Column({ nullable: false })
    professional_headline: string;

    @Column({ nullable: false })
    resume_hero: string;

    @Column({ nullable: false })
    description: string;

    @Column({ nullable: false })
    linkedin_url: string;

    @Column({ nullable: false })
    github_url: string;

    @Column({ nullable: false })
    resume_url: string;

    @OneToMany(() => Project, (project) => project.profile, {
        cascade: true,
    })
    projects: Project[];

    @OneToMany(() => Skill, (skill) => skill.profile, {
        cascade: true,
    })
    skills: Skill[];

    @OneToMany(() => Experience, (experience) => experience.profile, {
        cascade: true,
    })
    experiences: Experience[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}