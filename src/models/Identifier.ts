import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export default class Identifier {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'name'})
    name: string;

    @Column({name: 'cnpj '})
    cnpj: string;
 
    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}