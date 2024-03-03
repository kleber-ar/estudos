"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleFile = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const PATHS = {
    plants: path_1.default.join(__dirname, 'database', 'plantsData.json'),
    plantsMetadata: path_1.default.join(__dirname, 'database', 'plantsMetadata.json'),
};
class HandleFile {
    constructor() {
        this.PATHS = PATHS;
    }
    async saveFile(type, data) {
        await promises_1.default.writeFile(this.PATHS[`${type}`], JSON.stringify(data, null, 2));
    }
    async readFile(type) {
        const dataRaw = await promises_1.default.readFile(this.PATHS[`${type}`], { encoding: 'utf8' });
        const data = JSON.parse(dataRaw);
        return data;
    }
}
exports.HandleFile = HandleFile;
