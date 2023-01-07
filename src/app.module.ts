import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { BrandsModule } from './brands/brands.module';
import { AddonsModule } from './addons/addons.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [UsersModule, DatabaseModule, BrandsModule, AddonsModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
