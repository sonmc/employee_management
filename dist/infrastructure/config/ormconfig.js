"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = {
    type: "mysql",
    database: "employee_manager",
    username: "root",
    password: "123456",
    synchronize: false,
    migrationsRun: true,
    entities: [path_1.default.join(__dirname, "..", "schemas", "**", "*.*"), path_1.default.join(__dirname, "..", "schemas", "*.*")],
    migrations: [path_1.default.join(__dirname, "migrations", "*.*")],
    cli: {
        entitiesDir: path_1.default.join(__dirname, "..", "schemas"),
        migrationsDir: path_1.default.join(__dirname, "migrations")
    }
};
//# sourceMappingURL=ormconfig.js.map