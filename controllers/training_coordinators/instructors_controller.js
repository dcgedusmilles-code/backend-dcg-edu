const instrutorService = require('../../services/training_coordinators/instructors_service');

class InstrutorController {
    async criar(req, res) {
        try {
            const instrutor = await instrutorService.criarInstrutor(req.body);
            res.status(201).json(instrutor);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }

    async listar(req, res) {
        const instrutores = await instrutorService.listarInstrutores();
        res.json(instrutores);
    }

    async obter(req, res) {
        try {
            const instrutor = await instrutorService.obterInstrutorPorId(req.params.id);
            res.json(instrutor);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const instrutor = await instrutorService.atualizarInstrutor(req.params.id, req.body);
            res.json(instrutor);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    }

    async excluir(req, res) {
        try {
            await instrutorService.excluirInstrutor(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    }
}

module.exports = new InstrutorController();
