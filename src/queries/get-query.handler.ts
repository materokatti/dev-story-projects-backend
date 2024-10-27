import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetQuery } from '../queries/impl/get-query';

@QueryHandler(GetQuery)
export class GetQueryHandler implements IQueryHandler<GetQuery> {
    async execute(query: GetQuery) {
        console.log('Executing GetQuery...');
        // Query logic goes here
        return { message: 'Data fetched successfully' };
    }
}
