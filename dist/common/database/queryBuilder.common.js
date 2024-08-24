"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilder = void 0;
class QueryBuilder {
    getNonEmptyFieldNames(obj) {
        return Object.keys(obj).filter((key) => {
            const value = obj[key];
            return value !== undefined && value !== null && value !== '';
        });
    }
    joinFieldsAndValuesForUpdate(fields, values) {
        if (fields.length !== values.length) {
            throw new Error('Query Builder: Fields and values arrays must have the same length!');
        }
        const result = fields.map((field, index) => {
            return `${field} = '${values[index]}'`;
        });
        return result.join(', ');
    }
    joinFieldsAndValuesForSearch(fields, values) {
        if (fields.length !== values.length) {
            throw new Error('Query Builder: Fields and values arrays must have the same length!');
        }
        const result = fields.map((field, index) => {
            return `${field} ILIKE '%${values[index]}%'`;
        });
        return result.join(' or ');
    }
    joinFieldsAndValues(fields, values) {
        if (fields.length !== values.length) {
            throw new Error('Query Builder: Fields and values arrays must have the same length!');
        }
        const result = fields.map((field, index) => {
            return `${field} = '${values[index]}'`;
        });
        return result.join(' and ');
    }
    buildInsert(table, object) {
        const fields = this.getNonEmptyFieldNames(object);
        const values = Object.values(object);
        let insertCommand = 'INSERT INTO ';
        let fieldsString = ' (';
        fieldsString = fieldsString.concat(fields.join(', '));
        fieldsString = fieldsString.concat(') ');
        let valuesString = " VALUES ('";
        valuesString = valuesString.concat(values.join("', '"));
        valuesString = valuesString.concat("') ");
        insertCommand = insertCommand.concat(table);
        insertCommand = insertCommand.concat(fieldsString);
        insertCommand = insertCommand.concat(valuesString);
        return insertCommand;
    }
    buildUpdate(table, object, uuid) {
        const fields = this.getNonEmptyFieldNames(object);
        const values = Object.values(object);
        const updateFieldsAndValues = this.joinFieldsAndValuesForUpdate(fields, values);
        let updateCommand = 'UPDATE ';
        updateCommand = updateCommand.concat(table);
        updateCommand = updateCommand.concat(' SET ');
        updateCommand = updateCommand.concat(updateFieldsAndValues);
        updateCommand = updateCommand.concat(' WHERE uuid = ');
        updateCommand = updateCommand.concat(`'${uuid}'`);
        return updateCommand;
    }
    buildDelete(table, uuid) {
        let deleteCommand = 'DELETE FROM ';
        deleteCommand = deleteCommand.concat(table);
        deleteCommand = deleteCommand.concat(' WHERE uuid = ');
        deleteCommand = deleteCommand.concat(`'${uuid}'`);
        return deleteCommand;
    }
    buildSimpleSelect(table) {
        let simpleSelectCommand = 'SELECT * FROM ';
        simpleSelectCommand = simpleSelectCommand.concat(table);
        return simpleSelectCommand;
    }
    buildFilteredSelect(table, object) {
        const fields = this.getNonEmptyFieldNames(object);
        const values = Object.values(object);
        const filterString = this.joinFieldsAndValues(fields, values);
        let filteredSelectCommand = 'SELECT * FROM ';
        filteredSelectCommand = filteredSelectCommand.concat(table);
        filteredSelectCommand = filteredSelectCommand.concat(' WHERE ');
        filteredSelectCommand = filteredSelectCommand.concat(filterString);
        return filteredSelectCommand;
    }
    buildSearchSelect(table, object) {
        const fields = this.getNonEmptyFieldNames(object);
        const values = Object.values(object);
        const filterString = this.joinFieldsAndValuesForSearch(fields, values);
        let searchSelectCommand = 'SELECT * FROM ';
        searchSelectCommand = searchSelectCommand.concat(table);
        searchSelectCommand = searchSelectCommand.concat(' WHERE ');
        searchSelectCommand = searchSelectCommand.concat(filterString);
        return searchSelectCommand;
    }
}
exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=queryBuilder.common.js.map