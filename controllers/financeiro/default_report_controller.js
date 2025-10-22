const inadimplenciaService = require('../../services/financeiro/default_report_service');

class InadimplenciaController {
    async create(req, res) {
        try {
            const inadimplencia = await inadimplenciaService.create(req.body);
            res.status(201).json(inadimplencia);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const inadimplencias = await inadimplenciaService.findAll();
            res.json(inadimplencias);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findById(req, res) {
        try {
            const inadimplencia = await inadimplenciaService.findById(req.params.id);
            if (!inadimplencia) return res.status(404).json({ message: "Não encontrado" });
            res.json(inadimplencia);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const inadimplencia = await inadimplenciaService.update(req.params.id, req.body);
            if (!inadimplencia) return res.status(404).json({ message: "Não encontrado" });
            res.json(inadimplencia);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await inadimplenciaService.delete(req.params.id);
            if (!deleted) return res.status(404).json({ message: "Não encontrado" });
            res.json({ message: "Excluído com sucesso" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new InadimplenciaController();
