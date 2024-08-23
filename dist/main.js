"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const main_module_1 = require("./modules/main.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(main_module_1.MainModule);
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map