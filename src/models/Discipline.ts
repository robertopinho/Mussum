import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
@Entity("Discipline")
export default class Discipline {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 100,
        unique: true,
    })
    name: string;

    @Column()
    duration: number;

    @CreateDateColumn({name: 'created_At'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updatedAt: Date;
}