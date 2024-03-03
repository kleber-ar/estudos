"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("../exceptions");
const PlantValidate_1 = __importDefault(require("./validations/PlantValidate"));
class PlantService {
    constructor(model) {
        this.model = model;
    }
    async getAll() {
        const plants = await this.model.getAll();
        return plants;
    }
    static waterFrequencyCalculator(needsSun, size, origin) {
        const waterFrequency = needsSun
            ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
            : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
        return waterFrequency;
    }
    async create(plant) {
        PlantValidate_1.default.validateAttributes(plant);
        const { needsSun, size, origin } = plant;
        const waterFrequency = PlantService.waterFrequencyCalculator(needsSun, size, origin);
        const newPlant = await this.model.create({ ...plant, waterFrequency });
        return newPlant;
    }
    async getById(id) {
        const plant = await this.model.getById(id);
        if (!plant)
            throw new exceptions_1.NotFoundException('Plant not Found!');
        return plant;
    }
    async update(id, plant) {
        const plantExists = await this.model.getById(id);
        if (!plantExists)
            throw new exceptions_1.NotFoundException('Plant not Found!');
        PlantValidate_1.default.validateAttributes(plant);
        const { needsSun, size, origin } = plant;
        const waterFrequency = PlantService.waterFrequencyCalculator(needsSun, size, origin);
        const editedPlant = await this.model.update({ id: parseInt(id, 10), ...plant, waterFrequency });
        return editedPlant;
    }
    async removeById(id) {
        const isPlantRemoved = await this.model.removeById(id);
        if (!isPlantRemoved)
            throw new exceptions_1.NotFoundException('Plant not Found!');
    }
}
exports.default = PlantService;
