const service = require('../../services/it_department/infrastructure_network_service');

class RedeInfraestruturaController {
    async criar(req, res) {
        try {
            const data = await service.criarRede(req.body);
            res.status(201).json(data);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }

    async listar(req, res) {
        const redes = await service.listarRedes();
        res.json(redes);
    }

    async obterPorId(req, res) {
        try {
            const rede = await service.obterRedePorId(req.params.id);
            res.json(rede);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const rede = await service.atualizarRede(req.params.id, req.body);
            res.json(rede);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async remover(req, res) {
        try {
            await service.removerRede(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }
}

module.exports = new RedeInfraestruturaController();
