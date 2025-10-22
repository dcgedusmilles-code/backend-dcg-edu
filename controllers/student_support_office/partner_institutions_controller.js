const service = require('../../services/student_support_office/partner_institutions_service');

class InstituicaoParceiraController {
    async listar(req, res) {
        const insts = await service.listar();
        return res.json(insts);
    }

    async obter(req, res) {
        try {
            const inst = await service.obterPorId(req.params.id);
            return res.json(inst);
        } catch (e) {
            return res.status(404).json({ erro: e.message });
        }
    }

    async criar(req, res) {
        try {
            const nova = await service.criar(req.body);
            return res.status(201).json(nova);
        } catch (e) {
            return res.status(400).json({ erro: e.message });
        }
    }

    async atualizar(req, res) {
        try {
            const atualizada = await service.atualizar(req.params.id, req.body);
            return res.json(atualizada);
        } catch (e) {
            return res.status(400).json({ erro: e.message });
        }
    }

    async excluir(req, res) {
        try {
            await service.excluir(req.params.id);
            return res.status(204).send();
        } catch (e) {
            return res.status(404).json({ erro: e.message });
        }
    }
}

module.exports = new InstituicaoParceiraController();
