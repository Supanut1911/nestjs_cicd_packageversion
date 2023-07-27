import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ProfileModule } from './profile/profile.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ProductsModule,
    ProfileModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dev-site-db.cmedbxptmexp.ap-southeast-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: '9u^K354ZLW48FINX',
      database: 'finweb-strapi-dev-db',
      entities: [],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
