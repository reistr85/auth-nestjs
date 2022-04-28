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
      : [`dist/domain/models/**/*.js`],
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
    migrations: ['dist/base/type-orm/migrations/*.js'],
    cli: {
      migrationsDir: 'src/base/type-orm/migrations',
    },
  },
  {
    name: 'seed',
    ...dbConfig,
    migrationsTableName: 'seeds',
    migrations: ['dist/base/type-orm/seeds/*.js'],
    cli: {
      migrationsDir: 'src/base/type-orm/seeds',
    },
  },
];
