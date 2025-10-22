const alunoService = require('../../services/secretaria_academica/students_service');

class AlunoController {
    async create(req, res) {
        try {
            const aluno = await alunoService.createAluno(req.body);
            res.status(201).json(aluno);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getAll(req, res) {
        try {
            const alunos = await alunoService.getAllAlunos();
            res.json(alunos);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getById(req, res) {
        try {
            const aluno = await alunoService.getAlunoById(req.params.id);
            if (!aluno) return res.status(404).json({ message: 'Aluno não encontrado' });
            res.json(aluno);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async update(req, res) {
        try {
            const aluno = await alunoService.updateAluno(req.params.id, req.body);
            if (!aluno) return res.status(404).json({ message: 'Aluno não encontrado' });
            res.json(aluno);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await alunoService.deleteAluno(req.params.id);
            if (!deleted) return res.status(404).json({ message: 'Aluno não encontrado' });
            res.json({ message: 'Aluno removido com sucesso' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = new AlunoController();
