"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const generateRandomID_1 = __importDefault(require("../utils/generateRandomID"));
const linkSchema = new mongoose_1.default.Schema({
    longUrl: {
        type: String,
        required: true,
    },
    idUrl: {
        type: String,
        default: generateRandomID_1.default
    },
});
exports.default = mongoose_1.default.model('Link', linkSchema);
