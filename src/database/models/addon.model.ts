import { BaseModel } from './base.model';
import { BrandModel } from './brand.model';
import { Model } from 'objection';

export class AddonModel extends BaseModel {
  static tableName = 'addons';

  brandId: number;
  name: string;
  description: string;
  price: number;
  categoryId?: number;

  brand: BrandModel;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['brandId', 'name', 'description', 'price'],
      properties: {
        id: { type: 'integer' },
        brandId: { type: 'integer' },
        name: { type: 'string', maxLength: 255 },
        description: { type: 'string' },
        price: { type: 'integer' },
        categoryId: { type: 'integer' },
      },
    };
  }

  static relationMappings = {
    brand: {
      modelClass: `${__dirname}/brand.model`,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'addons.brandId',
        to: 'brands.id',
      },
    },

    category: {
      modelClass: `${__dirname}/category.model`,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'addons.categoryId',
        to: 'categoryId',
      },
    },
  };
}
