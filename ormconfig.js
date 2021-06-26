module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "ssl": false,
  extra: {
    ssl: { 
      rejectUnauthorized: false 
    }
  },
  "migrations": ["dist/database/migrations/*.ts"],
  "entities": ["dist/entities/*.ts"],
  "cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/entities"
  }
};