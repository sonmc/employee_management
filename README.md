# Hello, There

This is most simple project structure for Koajs and TypeORM configuration with `ormconfig.ts` extension.
 
## Project Structure

```txt
.
├── src // Typescript files
│   ├── entities
│   │   └── User.ts
│   ├── db
│   │   └── ormconfig.ts
│   │   ├── migrations
│   │   │   └── ... // migration files
├── tsconfig.json
├── package.json
```

# Generate migrations from database and entities.

yarn typeorm migration:generate -n first-migration yarn typeorm:run
