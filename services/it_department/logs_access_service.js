const logAcessoRepository = require('../../repositories/it_department/logs_access_repository');

class LogAcessoService {
    async listarLogs() {
        return await logAcessoRepository.findAll();
    }

    async obterLog(id) {
        const log = await logAcessoRepository.findById(id);
        if (!log) throw new Error('Log não encontrado');
        return log;
    }

    async criarLog(dados) {
        return await logAcessoRepository.create(dados);
    }

    async atualizarLog(id, dados) {
        const log = await logAcessoRepository.update(id, dados);
        if (!log) throw new Error('Log não encontrado');
        return log;
    }

    async excluirLog(id) {
        const result = await logAcessoRepository.delete(id);
        if (!result) throw new Error('Log não encontrado');
        return true;
    }
}

module.exports = new LogAcessoService();
