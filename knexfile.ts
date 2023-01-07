import * as dotenv from 'dotenv';
import type { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';
import config from './config/index';

dotenv.config({ path: '../../.env' });

// Update with your config settings.

export const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    connection: {
      database: config.db.name,
      user: config.db.username,
      password: config.db.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './src/database/migrations',
      stub: './src/database/migration.stub',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './src/database/seeds',
      stub: './src/database/seed.stub',
    },
    ...knexSnakeCaseMappers(),
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './src/database/migrations',
      stub: './src/database/migration.stub',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './src/database/seeds',
      stub: './src/database/seed.stub',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './src/database/migrations',
      stub: './src/database/migration.stub',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './src/database/seeds',
      stub: './src/database/seed.stub',
    },
  },
};
