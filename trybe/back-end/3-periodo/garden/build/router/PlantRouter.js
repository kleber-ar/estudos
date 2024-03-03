"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PlantController_1 = __importDefault(require("../controllers/PlantController"));
const Mysql2PlantModel_1 = __importDefault(require("../models/Mysql2PlantModel"));
// import PlantModel from '../models/PlantModel'; use sem banco de dados
const PlantService_1 = __importDefault(require("../services/PlantService"));
// const plantModel = new PlantModel(); use sem banco de dados
const plantModel = new Mysql2PlantModel_1.default();
const plantService = new PlantService_1.default(plantModel);
const plantController = new PlantController_1.default(plantService);
const plantRouter = (0, express_1.Router)();
plantRouter.get('/', (req, res, next) => plantController.getAll(req, res, next));
plantRouter.post('/', (req, res, next) => plantController.create(req, res, next));
plantRouter.get('/:id', (req, res, next) => plantController.getById(req, res, next));
plantRouter.delete('/:id', (req, res, next) => plantController.remove(req, res, next));
plantRouter.put('/:id', (req, res, next) => plantController.update(req, res, next));
exports.default = plantRouter;
