"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = exports.BadRequestException = void 0;
var BadRequest_1 = require("./BadRequest");
Object.defineProperty(exports, "BadRequestException", { enumerable: true, get: function () { return __importDefault(BadRequest_1).default; } });
var NotFound_1 = require("./NotFound");
Object.defineProperty(exports, "NotFoundException", { enumerable: true, get: function () { return __importDefault(NotFound_1).default; } });
