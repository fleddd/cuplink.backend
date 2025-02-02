"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const urlController_1 = __importDefault(require("./routes/urlController"));
const db_1 = require("./repositories/db");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use("/", urlController_1.default);
const _linkDb = new db_1.LinkDb();
const PORT = process.env.PORT;
const main = async () => {
    await _linkDb.RunDb().then(() => app.listen(PORT, () => console.log(`Listening on ${PORT}`)));
};
main();
