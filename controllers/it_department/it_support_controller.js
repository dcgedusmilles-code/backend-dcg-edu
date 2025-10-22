const suporteTIService = require('../../services/it_department/it_support_service');

class SuporteTIController {
    async criar(req, res) {
        try {
            const suporte = await suporteTIService.criarSuporte(req.body);
            res.status(201).json(suporte);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async listar(req, res) {
        try {
            const suportes = await suporteTIService.listarSuportes();
            res.json(suportes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async obter(req, res) {
        try {
            const suporte = await suporteTIService.obterSuporte(req.params.id);
            res.json(suporte);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const suporte = await suporteTIService.atualizarSuporte(req.params.id, req.body);
            res.json(suporte);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async deletar(req, res) {
        try {
            await suporteTIService.deletarSuporte(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new SuporteTIController();
