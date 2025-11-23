import { Goal } from "src/goals/entities/goal.entity";
import { Institution } from "src/institutions/entities/institution.entity";
import { Profile } from "src/profiles/entities/profile.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Experience {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false, enum: ['Laboral', 'Académica', 'Voluntariado']})
    type: string;

    @Column({ nullable: false })
    active: boolean;

    @Column({ nullable: false })
    position: string;

    @Column({ nullable: false })
    start_date: Date;

    @Column({ nullable: true })
    end_date: Date | null;

    @Column({ nullable: false })
    order: number;

    @ManyToOne(() => Profile, (profile) => profile.experiences, {
        onDelete: 'CASCADE',
    })
    profile: Profile;

    @ManyToOne(() => Goal, (goal) => goal.experiences, {
        onDelete: 'SET NULL',
    })
    goals: Goal[];

    @ManyToOne(() => Institution, (institution) => institution.experiences, {
        onDelete: 'SET NULL',
    })
    institution: Institution;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
