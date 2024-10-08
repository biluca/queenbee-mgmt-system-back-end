import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { GenericService } from 'src/common/genericService.commons';

@Injectable()
export class PostgresService extends GenericService {
  async runSQL(table: string, sql: string, unique: boolean = false) {
    this.logger.info(`Got into PostgresService.runSQL()`);

    const myPool = await this.getPool();
    const queryResult = await myPool.query(sql);
    return this.resolveResult(queryResult, table, unique);
  }

  private async getPool() {
    const pool = new Pool({
      connectionString: process.env.POSTGRES_URL,
    });

    return pool;
  }

  private resolveResult(result: any, table: string, unique: boolean = false) {
    if (!result) {
      return {};
    }

    if (result['command'] == 'SELECT') {
      if (unique) {
        return result['rows'][0];
      }
      return result['rows'];
    }

    if (result['command'] == 'INSERT') {
      return {
        message: `Data Created on Table: ${table}`,
      };
    }

    if (result['command'] == 'DELETE') {
      return {
        message: `Data Deleted from Table: ${table}`,
      };
    }

    if (result['command'] == 'UPDATE') {
      return {
        message: `Data Updated on Table: ${table}`,
      };
    }
  }
}
