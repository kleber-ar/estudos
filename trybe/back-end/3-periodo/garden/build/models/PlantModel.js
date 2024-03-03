"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HandleFile_1 = require("./HandleFile");
class PlantModel {
    constructor() {
        this.fileTypePlant = 'plants';
        this.fileTypePlantsMetadata = 'plantsMetadata';
        this.handleFile = new HandleFile_1.HandleFile();
    }
    async getNextPlantId(incrementAmount = 1) {
        const plantsMetadata = await this.handleFile
            .readFile(this.fileTypePlantsMetadata);
        plantsMetadata.lastPlantId += incrementAmount;
        await this.handleFile.saveFile(this.fileTypePlantsMetadata, plantsMetadata);
        return plantsMetadata.lastPlantId;
    }
    async getAll() {
        const plants = await this.handleFile.readFile(this.fileTypePlant);
        return plants;
    }
    async create(plant) {
        const plants = await this.getAll();
        const newPlantId = await this.getNextPlantId(1);
        const newPlant = { id: newPlantId, ...plant };
        plants.push(newPlant);
        await this.handleFile.saveFile(this.fileTypePlant, plants);
        return newPlant;
    }
    async getById(id) {
        const plants = await this.getAll();
        const plantById = plants.find((plant) => plant.id === parseInt(id, 10));
        if (!plantById)
            return null;
        return plantById;
    }
    async update(editedPlant) {
        const plants = await this.getAll();
        const updatedPlants = plants.map((plant) => {
            if (plant.id === editedPlant.id)
                return editedPlant;
            return plant;
        });
        await this.handleFile.saveFile(this.fileTypePlant, updatedPlants);
        return editedPlant;
    }
    async removeById(id) {
        const plants = await this.getAll();
        const removedPlant = plants.find((plant) => plant.id === parseInt(id, 10));
        if (!removedPlant)
            return false;
        const newPlants = plants.filter((plant) => plant.id !== parseInt(id, 10));
        this.handleFile.saveFile(this.fileTypePlant, newPlants);
        return true;
    }
}
exports.default = PlantModel;
