export interface CRUDProviderInterface {
    create(object: any): Promise<any>;
    getAll(): Promise<any>;
    getByFilters(filters: any): Promise<any>;
    getBySearch(search: any): Promise<any>;
    getById(uuid: string): Promise<any>;
    updateById(object: any): Promise<any>;
    deleteById(uuid: string): Promise<any>;
}
