import { BaseModel } from './base.model';
import { BrandModel } from './brand.model';
import { Model } from 'objection';

export class CategoryModel extends BaseModel {
  static tableName = 'categories';

  brandId: number;
  name: string;

  brand: BrandModel;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['brandId', 'name'],
      properties: {
        id: { type: 'integer' },
        brandId: { type: 'integer' },
        name: { type: 'string', maxLength: 255 },
      },
    };
  }

  static relationMappings = {
    brand: {
      modelClass: `${__dirname}/brand.model`,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'categories.brandId',
        to: 'brands.id',
      },
    },
  };
}
