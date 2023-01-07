import { Module } from '@nestjs/common';
import { AddonModel } from './models/addon.model';
import { BrandModel } from './models/brand.model';
import { CategoryModel } from './models/category.model';
import { UserModel } from './models/user.model';
import { knex } from 'knex';
import { knexConfig } from '../../knexfile';
import { Model } from 'objection';

const models = [AddonModel, BrandModel, CategoryModel, UserModel];

const modelProviders = models.map((model) => {
  return { provide: model.name, useValue: model };
});

const providers = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const config = knexConfig[process.env.NODE_ENV];
      const Knex = knex(config);

      Model.knex(Knex);
      return knex;
    },
  },
];
@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DatabaseModule {}
