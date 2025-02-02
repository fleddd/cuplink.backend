"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Link_1 = __importDefault(require("../models/Link"));
const connectionString = process.env.MONGOOSE_URI || "";
class LinkDb {
    async getUrl(idUrl) {
        return Link_1.default.findOne({ idUrl: idUrl });
    }
    async createUrl(longUrl) {
        const urlInDb = await Link_1.default.findOne({ longUrl: longUrl });
        if (urlInDb) {
            return urlInDb.idUrl;
        }
        return (await Link_1.default.create({ longUrl: longUrl })).idUrl;
    }
    async RunDb() {
        try {
            await mongoose_1.default.connect(connectionString);
            await mongoose_1.default.connection.db?.admin().command({ ping: 1 });
            console.log("Connected to db successfully.");
        }
        catch (e) {
            console.log(e);
            await mongoose_1.default.disconnect();
        }
    }
}
exports.LinkDb = LinkDb;
