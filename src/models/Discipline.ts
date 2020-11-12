import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Lesson from "./Lesson";

@Entity()
export default class Discipline {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 100,
        unique: true,
    })
    name: string;

    @OneToMany(type => Lesson, disciplines => Discipline)
    lesson: Lesson[];
    
    @Column()
    duration: number;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}
