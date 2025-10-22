const ExAlunoService = require('../../services/internship_and_professional_integration_office/former_students_service');

class ExAlunoController {
    async create(req, res) {
        try {
            const exAluno = await ExAlunoService.create(req.body);
            res.status(201).json(exAluno);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const exAlunos = await ExAlunoService.findAll();
            res.json(exAlunos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findById(req, res) {
        try {
            const exAluno = await ExAlunoService.findById(req.params.id);
            if (!exAluno) return res.status(404).json({ message: 'Ex-aluno não encontrado' });
            res.json(exAluno);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const updated = await ExAlunoService.update(req.params.id, req.body);
            if (!updated) return res.status(404).json({ message: 'Ex-aluno não encontrado' });
            res.json({ message: 'Ex-aluno atualizado com sucesso' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await ExAlunoService.delete(req.params.id);
            if (!deleted) return res.status(404).json({ message: 'Ex-aluno não encontrado' });
            res.json({ message: 'Ex-aluno removido com sucesso' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ExAlunoController();
