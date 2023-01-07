import { BaseModel } from './base.model';
import { Model } from 'objection';
import { BrandModel } from './brand.model';

export class UserModel extends BaseModel {
  static tableName = 'users';

  brandId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;

  brand: BrandModel;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['brandId', 'firstName', 'lastName', 'email', 'password'],
      properties: {
        id: { type: 'integer' },
        brandId: { type: 'integer' },
        firstName: { type: 'string', maxLength: 100 },
        lastName: { type: 'string', maxLength: 100 },
        email: { type: 'string', maxLength: 100 },
        password: { type: 'string' },
        isAdmin: { type: 'boolean', default: false },
      },
    };
  }

  static relationMappings = {
    brand: {
      modelClass: `${__dirname}/brand.model`,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'users.brandId',
        to: 'brands.id',
      },
    },
  };
}
