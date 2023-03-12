import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1678440957686 implements MigrationInterface {
    name = 'firstMigration1678440957686'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`employee_manager\`.\`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`employee_manager\`.\`users\``);
    }

}
