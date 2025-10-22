const disciplinaService = require('../../services/pedagogico/disciplines_service');

class DisciplinaController {
    async criar(req, res) {
        try {
            const disciplina = await disciplinaService.criarDisciplina(req.body);
            res.status(201).json(disciplina);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async listar(req, res) {
        const disciplinas = await disciplinaService.listarDisciplinas();
        res.json(disciplinas);
    }

    async obter(req, res) {
        try {
            const disciplina = await disciplinaService.obterDisciplina(req.params.id);
            res.json(disciplina);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const disciplina = await disciplinaService.atualizarDisciplina(req.params.id, req.body);
            res.json(disciplina);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }

    async deletar(req, res) {
        try {
            await disciplinaService.deletarDisciplina(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }
}

module.exports = new DisciplinaController();
