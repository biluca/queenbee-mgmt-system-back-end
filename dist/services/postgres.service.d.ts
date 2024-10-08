import { GenericService } from 'src/common/genericService.commons';
export declare class PostgresService extends GenericService {
    runSQL(table: string, sql: string, unique?: boolean): Promise<any>;
    private getPool;
    private resolveResult;
}
