const programaCarreiraService = require('../../services/student_support_office/career_programs_service');

class ProgramaCarreiraController {
    async create(req, res) {
        try {
            const programa = await programaCarreiraService.create(req.body);
            res.status(201).json(programa);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        const programas = await programaCarreiraService.getAll();
        res.json(programas);
    }

    async getById(req, res) {
        try {
            const programa = await programaCarreiraService.getById(req.params.id);
            res.json(programa);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const programa = await programaCarreiraService.update(req.params.id, req.body);
            res.json(programa);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await programaCarreiraService.delete(req.params.id);
            res.json({ message: 'Programa de Carreira removido com sucesso' });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new ProgramaCarreiraController();
