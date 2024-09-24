export interface CRUDProcessor {
  create(object: any): Promise<any>;
  getAll(): Promise<any>;
  getById(uuid: string): Promise<any>;
  getByFilters(filters: any): Promise<any>;
  getBySearch(search: any): Promise<any>;
  updateById(object: any): Promise<any>;
  deleteById(uuid: string): Promise<any>;
}
