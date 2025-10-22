const vagaEstagioService = require('../../services/internship_and_professional_integration_office/vacancies_internship_service');

class VagaEstagioController {
    async criar(req, res) {
        try {
            const vaga = await vagaEstagioService.criarVaga(req.body);
            res.status(201).json(vaga);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async listar(req, res) {
        try {
            const vagas = await vagaEstagioService.listarVagas();
            res.json(vagas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async obterPorId(req, res) {
        try {
            const vaga = await vagaEstagioService.obterVagaPorId(req.params.id);
            res.json(vaga);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const vaga = await vagaEstagioService.atualizarVaga(req.params.id, req.body);
            res.json(vaga);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async excluir(req, res) {
        try {
            await vagaEstagioService.excluirVaga(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new VagaEstagioController();
