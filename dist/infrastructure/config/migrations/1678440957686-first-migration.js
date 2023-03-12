"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstMigration1678440957686 = void 0;
class firstMigration1678440957686 {
    constructor() {
        this.name = 'firstMigration1678440957686';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`employee_manager\`.\`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`employee_manager\`.\`users\``);
    }
}
exports.firstMigration1678440957686 = firstMigration1678440957686;
//# sourceMappingURL=1678440957686-first-migration.js.map