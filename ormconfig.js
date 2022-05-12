module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,

  // for local testing change the 'dist' folder to 'src' and the 'js' extension for 'ts'

  migrations: [`dist/database/migrations/*.js`],

  entities: [`dist/entities/*.js`],

  cli: {
    migrationsDir: "dist/database/migrations",
  },
};
