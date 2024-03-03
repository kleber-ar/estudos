import { Router } from 'express';
import PlantController from '../controllers/PlantController';
// use com banco de dados criando um container com MYSQL
// import Mysql2PlantModel from '../models/Mysql2PlantModel';
// use sem banco de dados reescrevendo o json em database
import PlantModel from '../models/PlantModel';
import PlantService from '../services/PlantService';

// use sem banco de dados reescrevendo o json em database
const plantModel = new PlantModel();
// use com banco de dados criando um container com MYSQL
// const plantModel = new Mysql2PlantModel();
const plantService = new PlantService(plantModel);
const plantController = new PlantController(plantService);

const plantRouter = Router();

plantRouter.get('/', (req, res, next) => plantController.getAll(req, res, next));
plantRouter.post('/', (req, res, next) => plantController.create(req, res, next));
plantRouter.get('/:id', (req, res, next) => plantController.getById(req, res, next));
plantRouter.delete('/:id', (req, res, next) => plantController.remove(req, res, next));
plantRouter.put('/:id', (req, res, next) => plantController.update(req, res, next));

export default plantRouter;
