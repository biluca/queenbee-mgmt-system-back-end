import { Injectable } from '@nestjs/common';
import { QueryBuilder } from 'src/common/database/queryBuilder.common';
import { GenericProvider } from 'src/common/genericProvider.commons';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';
import { FinanceProviderInterface } from 'src/modules/finance/interface/finanance.interface';
import { Finance } from 'src/modules/finance/model/finance.model';
import { PostgresService } from 'src/services/postgres.service';

@Injectable()
export class FinanceProvider
  extends GenericProvider
  implements FinanceProviderInterface, CRUDProviderInterface
{
  private readonly postgresService = new PostgresService();
  private readonly queryBuilder = new QueryBuilder();
  private readonly tableName = 'finance';

  create(finance: any): Promise<any> {
    const insertQuery = this.queryBuilder.buildInsert(this.tableName, finance);

    this.logger.info(insertQuery);
    return this.postgresService.runSQL(this.tableName, insertQuery);
  }

  getAll(): Promise<any> {
    const simpleSelectQuery = this.queryBuilder.buildSimpleSelect(
      this.tableName,
    );

    return this.postgresService.runSQL(this.tableName, simpleSelectQuery);
  }

  getByFilters(filters: any): Promise<any> {
    const filteredSelectQuery = this.queryBuilder.buildFilteredSelect(
      this.tableName,
      filters,
    );

    this.logger.info(filteredSelectQuery);

    return this.postgresService.runSQL(this.tableName, filteredSelectQuery);
  }

  getBySearch(search: any): Promise<any> {
    const searchSelectQuery = this.queryBuilder.buildSearchSelect(
      this.tableName,
      search,
    );

    return this.postgresService.runSQL(this.tableName, searchSelectQuery);
  }

  getById(uuid: string): Promise<any> {
    const filters = {
      id: uuid,
    };
    const filteredSelectQuery = this.queryBuilder.buildFilteredSelect(
      this.tableName,
      filters,
    );

    return this.postgresService.runSQL(this.tableName, filteredSelectQuery);
  }

  updateById(finance: Finance): Promise<any> {
    const uuid = finance.uuid;
    delete finance.createdAt;
    delete finance.uuid;
    finance.updatedAt = new Date().toISOString();

    const updateQuery = this.queryBuilder.buildUpdate(
      this.tableName,
      finance,
      uuid,
    );

    this.logger.info(updateQuery);

    return this.postgresService.runSQL(this.tableName, updateQuery);
  }

  deleteById(uuid: string): Promise<any> {
    const deleteQuery = this.queryBuilder.buildDelete(this.tableName, uuid);

    this.logger.info(deleteQuery);

    return this.postgresService.runSQL(this.tableName, deleteQuery);
  }
}
