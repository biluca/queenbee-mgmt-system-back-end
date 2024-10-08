import { Injectable } from '@nestjs/common';
import { QueryBuilder } from 'src/common/database/queryBuilder.common';
import { GenericProvider } from 'src/common/genericProvider.commons';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';
import { AppointmentProviderInterface } from 'src/modules/appointments/interface/appointment.interface';
import { Appointment } from 'src/modules/appointments/model/appointment.model';
import { PostgresService } from 'src/services/postgres.service';

@Injectable()
export class AppointmentProvider
  extends GenericProvider
  implements AppointmentProviderInterface, CRUDProviderInterface
{
  private readonly postgresService = new PostgresService();
  private readonly queryBuilder = new QueryBuilder();
  private readonly tableName = 'appointment';

  create(appointment: Appointment): Promise<any> {
    const insertQuery = this.queryBuilder.buildInsert(
      this.tableName,
      appointment,
    );
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
  updateById(appointment: Appointment): Promise<any> {
    const uuid = appointment.uuid;
    delete appointment.createdAt;
    delete appointment.uuid;
    appointment.updatedAt = new Date().toISOString();

    const updateQuery = this.queryBuilder.buildUpdate(
      this.tableName,
      appointment,
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
