const logAcessoService = require('../../services/it_department/logs_access_service');

class LogAcessoController {
    async listar(req, res) {
        try {
            const logs = await logAcessoService.listarLogs();
            res.status(200).json(logs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async obter(req, res) {
        try {
            const log = await logAcessoService.obterLog(req.params.id);
            res.status(200).json(log);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async criar(req, res) {
        try {
            const novo = await logAcessoService.criarLog(req.body);
            res.status(201).json(novo);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const atualizado = await logAcessoService.atualizarLog(req.params.id, req.body);
            res.status(200).json(atualizado);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async excluir(req, res) {
        try {
            await logAcessoService.excluirLog(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new LogAcessoController();
