import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCommand } from './impl/create-command';

@CommandHandler(CreateCommand)
export class CreateCommandHandler implements ICommandHandler<CreateCommand> {
    async execute(command: CreateCommand) {
        console.log('Executing CreateCommand...');
        // Command logic goes here
    }
}
