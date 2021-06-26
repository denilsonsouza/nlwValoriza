module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  synchronize: true,
  dropSchema: false,
  logging: true,
  ssl: {
    ca: process.env.SSL_CERT,
  },
  "migrations": ["dist/database/migrations/*.ts"],
  "entities": ["dist/entities/*.ts"],
  "cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/entities"
  }
}