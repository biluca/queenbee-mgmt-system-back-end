"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericController = void 0;
const customLogger_commons_1 = require("./customLogger.commons");
class GenericController {
    constructor() {
        this.logger = new customLogger_commons_1.CustomLogger();
    }
    resolveResponse(req, res, result) {
        return result
            .then((response) => {
            this.logger.info(`${req.url} - Returning HTTP 200`);
            return res.status(200).send(response);
        })
            .catch((error) => {
            this.logger.info(`${req.url} - Returning HTTP ${error.status}`);
            this.logger.error(`${req.url} - ${error.message}`);
            return res.status(error.status).send(error);
        });
    }
}
exports.GenericController = GenericController;
//# sourceMappingURL=genericController.commons.js.map