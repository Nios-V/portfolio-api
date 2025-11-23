import { Profile } from "src/profiles/entities/profile.entity";
import { Skill } from "src/skills/entities/skill.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Project {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    active: boolean;

    @Column({ nullable: false })
    short_description: string;

    @Column({ nullable: false })
    complete_description: string;

    @Column({ nullable: true })
    image_url: string;

    @Column({ nullable: true })
    repository_url: string;

    @ManyToOne(() => Profile, (profile) => profile.projects, {
        onDelete: 'CASCADE',
    })
    profile: Profile;

    @ManyToMany(() => Skill, (skill) => skill.projects)
    skills: Skill[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
