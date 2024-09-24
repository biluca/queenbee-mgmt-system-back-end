import { Injectable } from '@nestjs/common';
import { QueryBuilder } from 'src/common/database/queryBuilder.common';
import { GenericProvider } from 'src/common/genericProvider.commons';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';
import { CustomersProviderInterface } from 'src/modules/customers/interface/customers.interface';
import { Customer } from 'src/modules/customers/model/customer.model';
import { PostgresService } from 'src/services/postgres.service';

@Injectable()
export class CustomersProvider
  extends GenericProvider
  implements CustomersProviderInterface, CRUDProviderInterface
{
  private readonly postgresService = new PostgresService();
  private readonly queryBuilder = new QueryBuilder();
  private readonly tableName = 'customers';

  create(customer: Customer): Promise<any> {
    const insertQuery = this.queryBuilder.buildInsert(this.tableName, customer);

    this.logger.info(insertQuery);
    return this.postgresService.runSQL(this.tableName, insertQuery);

    //return Promise.resolve({});
  }

  getAll(): Promise<any> {
    const simpleSelectQuery = this.queryBuilder.buildSimpleSelect(
      this.tableName,
    );

    return this.postgresService.runSQL(this.tableName, simpleSelectQuery);
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
  getByFilters(filters: any): Promise<any> {
    const filteredSelectQuery = this.queryBuilder.buildFilteredSelect(
      this.tableName,
      filters,
    );

    this.logger.info(filteredSelectQuery);

    return this.postgresService.runSQL(this.tableName, filteredSelectQuery);

    //return Promise.resolve({});
  }

  getBySearch(search: any): Promise<any> {
    const searchSelectQuery = this.queryBuilder.buildSearchSelect(
      this.tableName,
      search,
    );

    return this.postgresService.runSQL(this.tableName, searchSelectQuery);

    //return Promise.resolve({});
  }
  updateById(customer: Customer): Promise<any> {
    const uuid = customer.uuid;
    delete customer.createdAt;
    delete customer.uuid;
    customer.updatedAt = new Date().toISOString();

    const updateQuery = this.queryBuilder.buildUpdate(
      this.tableName,
      customer,
      uuid,
    );

    this.logger.info(updateQuery);

    return this.postgresService.runSQL(this.tableName, updateQuery);

    //return Promise.resolve({});
  }
  deleteById(uuid: string): Promise<any> {
    const deleteQuery = this.queryBuilder.buildDelete(this.tableName, uuid);

    this.logger.info(deleteQuery);

    return this.postgresService.runSQL(this.tableName, deleteQuery);
  }

  getTodayBirthdays(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
