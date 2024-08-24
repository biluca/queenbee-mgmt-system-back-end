"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericModel = void 0;
const uuid_1 = require("uuid");
class GenericModel {
    constructor() {
        this.uuid = (0, uuid_1.v4)();
        this.createdAt = new Date().toISOString();
    }
}
exports.GenericModel = GenericModel;
//# sourceMappingURL=genericModel.model.js.map