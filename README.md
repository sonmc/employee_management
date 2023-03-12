# Hello, There

This is most simple project structure for NodeJs and TypeORM configuration with `ormconfig.ts` extension.

## Stackoverflow

Checkout this answer on stackoverflow at:
[https://stackoverflow.com/questions/52187328/how-to-specify-ormconfig-ts-for-typeorm](https://stackoverflow.com/questions/52187328/how-to-specify-ormconfig-ts-for-typeorm)

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
