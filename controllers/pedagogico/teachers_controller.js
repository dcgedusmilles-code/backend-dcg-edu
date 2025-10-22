const professorService = require('../../services/pedagogico/teachers_service');

class ProfessorController {
    async criar(req, res) {
        try {
            const professor = await professorService.criarProfessor(req.body);
            res.status(201).json(professor);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async listar(req, res) {
        const professores = await professorService.listarProfessores();
        res.json(professores);
    }

    async obter(req, res) {
        try {
            const professor = await professorService.obterProfessor(req.params.id);
            res.json(professor);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const professor = await professorService.atualizarProfessor(req.params.id, req.body);
            res.json(professor);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }

    async deletar(req, res) {
        try {
            await professorService.deletarProfessor(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }
}

module.exports = new ProfessorController();
