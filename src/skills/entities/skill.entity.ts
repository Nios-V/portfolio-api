import { Profile } from "src/profiles/entities/profile.entity";
import { Project } from "src/projects/entities/project.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Skill {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true, nullable: false })
    name: string;

    @Column({ nullable: false })
    active: boolean;

    @Column({ nullable: true })
    icon_url: string;

    @Column({ nullable: true, enum: ['Básico', 'Intermedio', 'Avanzado'] })
    experience_level: string;

    @Column({ nullable: true })
    is_core: boolean;

    @ManyToMany(() => Project, (project) => project.skills)
    projects: Project[];

    @ManyToOne(() => Profile, (profile) => profile.skills, {
        onDelete: 'CASCADE',
    })
    profile: Profile;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
