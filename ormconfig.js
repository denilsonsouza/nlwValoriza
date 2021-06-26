module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  extra: {
    ssl: true
  },
  "migrations": ["dist/database/migrations/*.ts"],
  "entities": ["dist/entities/*.ts"],
  "cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/entities"
  }
}