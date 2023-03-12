import path from "path";
import { ConnectionOptions } from "typeorm";

export default {
  type: "mysql",
  database: "employee_manager",
  username: "root",
  password: "123456",
  synchronize: false,
  migrationsRun: true,
  entities: [path.join(__dirname, "..", "schemas", "**", "*.*"), path.join(__dirname, "..", "schemas", "*.*")],
  migrations: [path.join(__dirname, "migrations", "*.*")],
  cli: {
    entitiesDir: path.join(__dirname, "..", "schemas"),
    migrationsDir: path.join(__dirname, "migrations")
  }
} as ConnectionOptions;
