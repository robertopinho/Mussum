import {MigrationInterface, QueryRunner} from "typeorm";

export class ModifyClassDiscipline1605018602906 implements MigrationInterface {
    name = 'ModifyClassDiscipline1605018602906'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_f8129e3c7eacda851f01f054f96"`);
        await queryRunner.query(`ALTER TABLE "college" RENAME COLUMN "identificationCnpj" TO "identificationCnpj "`);
        await queryRunner.query(`ALTER TABLE "lesson" RENAME COLUMN "classeId" TO "disciplinesId"`);
        await queryRunner.query(`ALTER TABLE "university" RENAME COLUMN "identificationCnpj" TO "identificationCnpj "`);
        await queryRunner.query(`CREATE TABLE "discipline" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "duration" integer NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_ba7f210baab523048c0386c3463" UNIQUE ("name"), CONSTRAINT "PK_139512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student_disciplines_discipline" ("studentId" uuid NOT NULL, "disciplineId" uuid NOT NULL, CONSTRAINT "PK_636b7288f665b0f25f393260d73" PRIMARY KEY ("studentId", "disciplineId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e79d445cbf31beca9e94e61f77" ON "student_disciplines_discipline" ("studentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6c73cbc1fea7db56ae6dcc9151" ON "student_disciplines_discipline" ("disciplineId") `);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_585a5106cb3146ecc7076870e4a" FOREIGN KEY ("disciplinesId") REFERENCES "discipline"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_disciplines_discipline" ADD CONSTRAINT "FK_e79d445cbf31beca9e94e61f770" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_disciplines_discipline" ADD CONSTRAINT "FK_6c73cbc1fea7db56ae6dcc91518" FOREIGN KEY ("disciplineId") REFERENCES "discipline"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_disciplines_discipline" DROP CONSTRAINT "FK_6c73cbc1fea7db56ae6dcc91518"`);
        await queryRunner.query(`ALTER TABLE "student_disciplines_discipline" DROP CONSTRAINT "FK_e79d445cbf31beca9e94e61f770"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_585a5106cb3146ecc7076870e4a"`);
        await queryRunner.query(`DROP INDEX "IDX_6c73cbc1fea7db56ae6dcc9151"`);
        await queryRunner.query(`DROP INDEX "IDX_e79d445cbf31beca9e94e61f77"`);
        await queryRunner.query(`DROP TABLE "student_disciplines_discipline"`);
        await queryRunner.query(`DROP TABLE "discipline"`);
        await queryRunner.query(`ALTER TABLE "university" RENAME COLUMN "identificationCnpj " TO "identificationCnpj"`);
        await queryRunner.query(`ALTER TABLE "lesson" RENAME COLUMN "disciplinesId" TO "classeId"`);
        await queryRunner.query(`ALTER TABLE "college" RENAME COLUMN "identificationCnpj " TO "identificationCnpj"`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_f8129e3c7eacda851f01f054f96" FOREIGN KEY ("classeId") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
