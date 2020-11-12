import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Discipline from './Discipline'
import { IsEmail, Max, MaxLength, Min, min, MinLength } from 'class-validator';
@Entity()
export default class Student {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @MaxLength(50)
    @MinLength(3)
    name: string;

    @Column()
    @Max(99999)
    @Min(10000)
    key: number;

    @Column()
    @IsEmail()
    email: string;

    @ManyToMany( type => Discipline)
    @JoinTable()
    disciplines: Discipline;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
} 