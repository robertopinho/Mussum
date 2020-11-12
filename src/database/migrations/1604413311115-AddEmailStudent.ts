import {MigrationInterface, QueryRunner} from "typeorm";

export class AddEmailStudent1604413311115 implements MigrationInterface {
    name = 'AddEmailStudent1604413311115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
    }

}
