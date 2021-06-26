module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  extra: {
    ssl: true,
    rejectUnauthorized : false
  },
  "migrations": ["dist/database/migrations/*.ts"],
  "entities": ["dist/entities/*.ts"],
  "cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/entities"
  }
}