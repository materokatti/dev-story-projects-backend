import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandler } from '@nestjs/cqrs';
import { QueryHandler } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [AppService, ...CommandHandler, ...QueryHandler],
})
export class AppModule { }
