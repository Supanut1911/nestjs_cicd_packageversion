import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [ProductsModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
