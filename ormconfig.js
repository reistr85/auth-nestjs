const environment = process.env.NODE_ENV;
const dbConfig = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities:
    environment === 'test'
      ? [`src/domain/models/**/*.entity.ts`]
      : [`dist/core/domain/**/*.js`],
  database:
    environment === 'test' ? process.env.DB_NAME_TEST : process.env.DB_NAME,
  migrationsRun: environment === 'test',
};

module.exports = [
  {
    ...dbConfig,
    synchronize: environment === 'development',
    logging: true,
    logger: 'file',

    migrationsTableName: 'migrations',
    migrations: ['dist/data/type-orm/migrations/*.js'],
    cli: {
      migrationsDir: 'src/data/type-orm/migrations',
    },
  },
  {
    name: 'seed',
    ...dbConfig,
    migrationsTableName: 'seeds',
    migrations: ['dist/data/type-orm/seeds/*.js'],
    cli: {
      migrationsDir: 'src/data/type-orm/seeds',
    },
  },
];
