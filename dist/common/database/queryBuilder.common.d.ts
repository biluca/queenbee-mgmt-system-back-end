export declare class QueryBuilder {
    private getNonEmptyFieldNames;
    private joinFieldsAndValuesForUpdate;
    private joinFieldsAndValuesForSearch;
    private joinFieldsAndValues;
    buildInsert(table: string, object: any): string;
    buildUpdate(table: string, object: any, uuid: string): string;
    buildDelete(table: string, uuid: string): string;
    buildSimpleSelect(table: string): string;
    buildFilteredSelect(table: string, object: any): string;
    buildSearchSelect(table: string, object: any): string;
}
