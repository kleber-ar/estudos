"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("../../exceptions");
class PlantValidate {
    static validateBreed(breed) {
        if (typeof breed !== 'string') {
            throw new exceptions_1.BadRequestException('Attribute "breed" must be string.');
        }
    }
    static validateNeedsSun(needsSun) {
        if (typeof needsSun !== 'boolean') {
            throw new exceptions_1.BadRequestException('Attribute "needsSun" must be boolean.');
        }
    }
    static validateOrigin(origin) {
        if (typeof origin !== 'string') {
            throw new exceptions_1.BadRequestException('Attribute "origin" must be string.');
        }
    }
    static validateSize(size) {
        if (typeof size !== 'number') {
            throw new exceptions_1.BadRequestException('Attribute "size" must be number.');
        }
    }
    static validateAttributes(plant) {
        PlantValidate.validateBreed(plant.breed);
        PlantValidate.validateNeedsSun(plant.needsSun);
        PlantValidate.validateOrigin(plant.origin);
        PlantValidate.validateSize(plant.size);
    }
}
exports.default = PlantValidate;
