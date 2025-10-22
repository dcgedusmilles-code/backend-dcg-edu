const tecnicoTIService = require('../../services/it_department/it_technicians_service');

class TecnicoTIController {
    async criar(req, res) {
        try {
            const tecnico = await tecnicoTIService.criarTecnico(req.body);
            res.status(201).json(tecnico);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async listar(req, res) {
        try {
            const tecnicos = await tecnicoTIService.listarTecnicos();
            res.json(tecnicos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async obter(req, res) {
        try {
            const tecnico = await tecnicoTIService.obterTecnico(req.params.id);
            res.json(tecnico);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const tecnico = await tecnicoTIService.atualizarTecnico(req.params.id, req.body);
            res.json(tecnico);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async deletar(req, res) {
        try {
            await tecnicoTIService.deletarTecnico(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new TecnicoTIController();
