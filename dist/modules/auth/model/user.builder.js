"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBuilder = void 0;
const crypto_1 = require("crypto");
const user_model_1 = require("./user.model");
class UserBuilder {
    constructor() {
        this.cipherAlgorithm = 'aes-256-cbc';
        this.cipherKey = Buffer.from(process.env.PASSWORD_KEY_SECRET);
        this.initializationVector = Buffer.from(process.env.PASSWORD_VECTOR);
    }
    withName(name) {
        this.name = name;
        return this;
    }
    withUserName(username) {
        this.username = username;
        return this;
    }
    withPassword(password) {
        const cipher = (0, crypto_1.createCipheriv)(this.cipherAlgorithm, this.cipherKey, this.initializationVector);
        let crypted = cipher.update(password, 'utf-8').toString();
        crypted += cipher.final('hex');
        this.password = crypted;
        return this;
    }
    build() {
        const customer = new user_model_1.User();
        if (this.name !== undefined)
            customer.name = this.name;
        if (this.username !== undefined)
            customer.username = this.username;
        if (this.password !== undefined)
            customer.password = this.password;
        return customer;
    }
}
exports.UserBuilder = UserBuilder;
//# sourceMappingURL=user.builder.js.map