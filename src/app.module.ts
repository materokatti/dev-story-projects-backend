import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [AppService, ...CommandHandlers, ...QueryHandlers],
})
export class AppModule { }
