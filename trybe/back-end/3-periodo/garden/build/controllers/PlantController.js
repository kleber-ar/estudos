"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlantController {
    constructor(service) {
        this.service = service;
    }
    async getAll(_req, res, next) {
        try {
            const plants = await this.service.getAll();
            return res.status(200).json(plants);
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const plant = await this.service.create(req.body);
            return res.status(201).json(plant);
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        const { id } = req.params;
        try {
            const plant = await this.service.getById(id);
            return res.status(200).json(plant);
        }
        catch (error) {
            next(error);
        }
    }
    async remove(req, res, next) {
        const { id } = req.params;
        try {
            await this.service.removeById(id);
            return res.status(204).end();
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        const { id } = req.params;
        try {
            const plant = await this.service.update(id, req.body);
            return res.status(200).json(plant);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = PlantController;
