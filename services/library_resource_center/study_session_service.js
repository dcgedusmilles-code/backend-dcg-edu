const sessaoEstudoRepository = require('../../repositories/library_resource_center/study_session_repository');

class SessaoEstudoService {
    async listar() {
        return await sessaoEstudoRepository.findAll();
    }

    async buscarPorId(id) {
        return await sessaoEstudoRepository.findById(id);
    }

    async criar(dados) {
        return await sessaoEstudoRepository.create(dados);
    }

    async atualizar(id, dados) {
        return await sessaoEstudoRepository.update(id, dados);
    }

    async remover(id) {
        return await sessaoEstudoRepository.delete(id);
    }
}

module.exports = new SessaoEstudoService();
