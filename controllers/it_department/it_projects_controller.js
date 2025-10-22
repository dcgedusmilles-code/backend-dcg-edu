const projetoTIService = require('../../services/it_department/it_projects_service');

class ProjetoTIController {
    async criar(req, res) {
        try {
            const novo = await projetoTIService.createProjeto(req.body);
            res.status(201).json(novo);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async listar(req, res) {
        const projetos = await projetoTIService.listarProjetos();
        res.json(projetos);
    }

    async buscarPorId(req, res) {
        try {
            const projeto = await projetoTIService.buscarPorId(req.params.id);
            res.json(projeto);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const projeto = await projetoTIService.atualizarProjeto(req.params.id, req.body);
            res.json(projeto);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async deletar(req, res) {
        try {
            await projetoTIService.deletarProjeto(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}

module.exports = new ProjetoTIController();
