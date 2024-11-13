import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import db from '@config/databases/db-info';
import { UserModule } from '@model/users';
import { AuthModule } from '@auth/index';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot(db), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
