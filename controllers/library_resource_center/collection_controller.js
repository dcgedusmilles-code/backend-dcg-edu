const service = require('../../services/library_resource_center/collection_service');

class AcervoController {
    async listar(req, res) {
        const data = await service.listar();
        res.json(data);
    }

    async buscar(req, res) {
        const data = await service.buscarPorId(req.params.id);
        res.json(data);
    }

    async criar(req, res) {
        const novo = await service.criar(req.body);
        res.status(201).json(novo);
    }

    async atualizar(req, res) {
        const atualizado = await service.atualizar(req.params.id, req.body);
        res.json(atualizado);
    }

    async remover(req, res) {
        await service.remover(req.params.id);
        res.status(204).send();
    }
}

module.exports = new AcervoController();
