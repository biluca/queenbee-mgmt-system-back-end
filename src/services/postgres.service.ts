import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { GenericService } from 'src/common/genericService.commons';

@Injectable()
export class PostgresService extends GenericService {
  async runSQL(table: string, sql: string) {
    this.logger.info(`Got into PostgresService.runSQL()`);

    const myPool = await this.getPool();
    const queryResult = await myPool.query(sql);
    return this.resolveResult(queryResult, table);
  }

  private async getPool() {
    const pool = new Pool({
      connectionString: process.env.POSTGRES_URL,
    });

    return pool;
  }

  private resolveResult(result: any, table: string) {
    if (!result) {
      return {};
    }

    if (result['command'] == 'SELECT') {
      if (result['rowCount'] == 1) {
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