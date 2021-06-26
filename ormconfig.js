console.log(process.env.DATABASE_URL);
module.exports = {
  "type": "postgres",
  "url" : process.env.DATABASE_URL,
  "migrations" : ["dist/database/migrations/*.ts"],
  "entities" : ["dist/entities/*.ts"],
  "cli" : {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/entities"
  }
}