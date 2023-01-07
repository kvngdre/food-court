import { BaseModel } from './base.model';

export class BrandModel extends BaseModel {
  static tableName = 'brands';

  name: string;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', maxLength: 255 },
      },
    };
  }
}
